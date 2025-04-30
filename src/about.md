---
layout: base.njk
title: About
---

# About this Site

This site is generated with [Eleventy](https://www.11ty.dev/), styled with [Tailwindcss](https://tailwindcss.com/), hosted with [GitHub Pages](https://pages.github.com/), and deployed with [GitHub Actions](https://github.com/features/actions). These are all free technologies, and the only part of the site I pay for is the domain name.

Here, I'll give a quick overview of how the site was built and how you can do the same. Mostly, this is a collection of tutorials to follow.

## Steps

1. Create a site with [Eleventy](https://www.11ty.dev/)
2. Style the site with [Tailwindcss](https://tailwindcss.com/)
3. Deploy the site with [Pages](https://pages.github.com/) via an [Action](https://github.com/features/actions)
4. Acquire a domain name and use it on your site


## Eleventy

Eleventy is a static site generator. It uses configurable assets to generate an easy to deploy build. It works with lots of templating languages (I'm using Nunjucks and Markdown), and compiles quickly even with dozens or hundreds of pages to sort through.

To begin a super simple Eleventy project, check out their [Get Started](https://www.11ty.dev/docs/) docs.

To really get into it, create a configuration file and some startup scripts. There are many great tutorials, but [Learn Eleventy](https://learn-eleventy.pages.dev/) is a fantastic place to start.

### Layouts and components

A _template_ is a content file that is turned into a page. A project wants at least one, `index.*`, that serves as the homepage. A _layout_ allows you to add the same content to many pages, like a wrapper around the page content. This is great for boilerplate content like the `<head>`. A _component_ is a seaparate piece of content that can be included (imported) into templates and layouts. For example:

* `src/about.md` is a template in Markdown format that describes this page. It uses the base layout, so only the page content is added to this file.
* `src/_layouts/base.njk` is a layout that I use on all my pages. It contains the `<head>`, and imports the header and footer.
* `src/_includes/header.njk` and `src/_includes/footer.njk` are individual components that can be used anywhere. Since they are stylistically complex, it's nice to have them broken out like this.

### Static files

Static files like images and CSS are not added to the final build by default. They need to be called out in particular so they can be brought over. To do so, add a "passthrough copy" to the Eleventy config. This will ensure that the specified files/folders get copied into the final build. This is also needed for Tailwind, later.

```
// Passthrough Copies for Static Assets
config.addPassthroughCopy("src/assets/img")
config.addPassthroughCopy("src/assets/files")
```

### Markdown Processing

Eleventy will parse Markdown on its own. However, styling is tricky. Since we don't want to style every line ourselves (that defeats the purpose), we want to set default styling options for Markdown elements. To do so, we can add markdown-it and markdown-it-class to our project. Then classes can be added in the Eleventy config. Here's an example. I've truncated my own for readability:

```
// Imports
import markdownIt from "markdown-it"
import markdownItClass from'@toycode/markdown-it-class'

// Markdown Processing (GOES IN THE CONFIG EXPORT)
const md = new markdownIt({
    html: true,
}).use(markdownItClass, {
    // Adds classes to markdown elements for styling
    h1: ['text-4xl', 'text-gray-50', 'font-bold', 'mt-6'],
})
config.setLibrary('md', md)
config.addPairedShortcode("markdown", (content) => {
    return md.render(content);
})
```

## Tailwindcss

I use Tailwind for styling. It's essentially a huge collection of CSS classes to use in your HTML. Then one can just use those classes instead of writing their own CSS. In that way, it's similar to Bootstrap or USWDS. However, it doesn't include its own components. Just styling!

See the Tailwindcss [installation docs](https://tailwindcss.com/docs/installation/using-vite).

Note that there isn't a build in way to use Tailwind with Eleventy. We have to do it ourselves! I followed this wonderful tutorial by [Humankode](https://www.humankode.com/eleventy/how-to-set-up-tailwind-4-with-eleventy-3/) to make it work.

Essentially:
1. Add tailwind to your project like normal. Create the `index.css`, add it to the `<head>`
2. Compile Tailwind with their NPM package and `postcss`
3. Minimize the compiled CSS
4. Write the compiled CSS to the output directory (to your build)

This does all the work that we were doing before with `addPassthroughCopy`, with the added compile step required with this level of abstraction. 

## Deployment

Eleventy generates a static site. The final build can be hosted pretty much anywhere, since it's just a collection of files! There's no running server, API, or anything else. There are plenty of places to host a static build like this one, and I used [GitHub Pages](https://pages.github.com/).

### GitHub Pages

To utilize GitHub Pages at a basic level, one needs to:

1. Create a repostory named like `USERNAME.github.io`. This will also be the default URL when the site is live
2. Create a new branch for _just_ the site build
    * A common example is `gh-pages`
    * From anywhere, use `git switch --orphan gh-pages` to create the completely empy branch
    * Push _just_ the contents of the build
3. Configure the repository settings to display the built site
    * Repo -> Settings -> Code and automation -> Pages -> Build and deployment
    * Pick a branch to use. It's `main` by default, it wants the build branch from above
4. Wait a minute or two, then check the URL `USERNAME.github.io` to see the site

Thats... Cumbersome. And tiring. I'm tired. There must be a better way! And there is!

### GitHub Actions

We can automatically run the above process with [GitHub Actions](https://github.com/features/actions). See Eleventy's [mini tutorial](https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-git-hub-pages)! You can also see my action setup on [GitHub](https://github.com/jperson1/jperson1.github.io/blob/main/.github/workflows/deploy-to-ghpages.yml)!

Once your action is created in `.github\workflows\deploy-to-ghpages.yml`, it is very configurable. I'll quickly go through what does what in the file and provide some options.

The `name` is just the tagline for your action in GitHub. It can be anything.

The `on` block decides when the action deploys.

`on: push: branches: - main`. From the tuorial. Fire off the action from the `main` branch whenever it recieves an update.
`on: workflow_dispatch:`. I use this to only release when I need to. Fire on a specified branch, but it must be done manually in the GHA menu.

The `jobs: deploy:` block defines the action that's taking place.

`runs-on: ubuntu-22.04`. From the tutorial. Decides what runner to use.
`runs-on: ubuntu-latest`. I use this. They're functionally the same, but it feels better.

The action needs write permissions, and concurrency is a must. The prior because it will need to move the build to its own branch, and the latter because further steps rely on earlier ones. 

The `steps` block decides what is done and in what order. It's recomended to use official actions from GitHub to reduce complexity. So, branch actions and Node/NPM setup are brought in from elsewhere.
1. `actions/checkout@v4`. Use the action for checking out the branch
2. `actions/setup-node@v4`. Use the action to setup any node version
3. `actions/cache@v4`. Use the action to recache or reuse the node modules
4. `npm install` and `npm run build-ghpages`. Create the build
    * One doesn't _need_ a separate build script called `build-ghpages`. It can be the regular build if they're the same

Now that the build has been created, the final action will place the build into the `gh-pages` branch. Using the tutorial options will fail if the action isn't on `main`, and it will take the build from `_site`. To deploy from other branches the `if` block can be changed or removed. If the build is configured to go to a different folder then the `publish_dir` can be changed.

## Domain Name

Adding a domain name is unfortunately somewhat variable based on where the domain comes from. I bought my domain many years ago with Google Domains. Since then, it was moved to Squarespace. The general steps are:

1. Purchase a domain name from a provider like Squarespace or GoDaddy
2. Add your domain name to GitHub Pages under Repo -> Settings -> Code and automation -> Pages -> Custom domain
    * This will add a CNAME file to the `main` branch. Make sure it is added to the build in `gh-pages` by editing the workflow action
    * Add `cname: example.com` to the `with` block of the final step to carry the CNAME file over 
3. Point your domain at the IP address for GitHub Pages
    * You may hve to remove some default options depending on your provider
    * You may also have to add a challenge token to verify the domain with GitHub
    * Find the IP addresses at the [GitHub Pages tutorial](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
4. Wait a little while for the DNS provider to switch everythiong over
5. Verify the cutover with `dig EXAMPLE.COM +noall +answer -t A`
    * This is for Git Bash. You can use something else, but you'll have to install `dig`
6. Visit your domain and verify that your site is hosted there! Also visit the `USERNAME.github.io` and verify it redirects to the new domain name
