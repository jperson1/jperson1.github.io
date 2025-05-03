// Base Imports
import fs from 'fs'
import path from 'path'

// NPM Imprts
import cssnano from 'cssnano'
import dotenv from 'dotenv'
import postcss from 'postcss'
import slugify from '@sindresorhus/slugify'
import tailwindcss from '@tailwindcss/postcss'

// Eleventy Plugin Imports
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import eleventyNavigationPlugin from "@11ty/eleventy-navigation"
import markdownIt from "markdown-it"
import markdownItAnchor from'markdown-it-anchor'
import markdownItClass from'@toycode/markdown-it-class'
import mdIterator from 'markdown-it-for-inline'

// Custom Imports
import headingPermaLinks from "./eleventy_config/heading_permalinks.js"

dotenv.config()

const heading_class_defaults = {
    headings: ['text-gray-50', 'font-bold', 'mt-6', 'mb-4', 'flex', 'gap-2', 'items-center', 'scroll-mt-20']
}

export default (config) => {
    // Source for Tailwindcss preprocessor: https://www.humankode.com/eleventy/how-to-set-up-tailwind-4-with-eleventy-3/
    //compile tailwind before eleventy processes the files
    const processor = postcss([
        //compile tailwind
        tailwindcss(),

        //minify tailwind css
        cssnano({
            preset: 'default',
        }),
    ])
    config.on('eleventy.before', async () => {
        const tailwindInputPath = path.resolve('./src/assets/css/index.css')

        const tailwindOutputPath = './_site/assets/css/index.css'

        const cssContent = fs.readFileSync(tailwindInputPath, 'utf8')

        const outputDir = path.dirname(tailwindOutputPath)
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
        }

        const result = await processor.process(cssContent, {
            from: tailwindInputPath,
            to: tailwindOutputPath,
        })

        fs.writeFileSync(tailwindOutputPath, result.css)
    })

    // Passthrough Copies for Static Assets
    config.addPassthroughCopy("src/assets/img")
    config.addPassthroughCopy("src/assets/files")

    // Plugins
    config.addPlugin(eleventyImageTransformPlugin)
    config.addPlugin(eleventyNavigationPlugin)

    // Markdown Processing
    const md = new markdownIt({
        // Using the highlight option just to better style code blocks
        highlight: function (str) {
            return '<pre class="text-lg text-gray-200 my-4 p-4 border"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
        html: true,
    }).use(markdownItAnchor, {
        // Adds anchor links to all headings, with slugified text as the id
        permalink: headingPermaLinks,
        slugify: s => slugify(s),
    }).use(markdownItClass, {
        // Adds classes to markdown elements for styling
        h1: [...heading_class_defaults.headings, ...['text-4xl']],
        h2: [...heading_class_defaults.headings, ...['text-3xl']],
        h3: [...heading_class_defaults.headings, ...['text-2xl']],
        p: ['text-lg', 'text-gray-50', 'my-4'],
        a: ['text-blue-300', 'hover:text-blue-500', 'transition-colors', 'duration-200'],
        ol: ['list-decimal', 'text-xl', 'mb-4', 'ml-5', 'text-gray-200'],
        ul: ['list-disc', 'text-xl', 'ml-5', 'text-gray-200'],
        li: ['text-lg', 'text-gray-50'],
    }).use(mdIterator, 'url_new_win', 'link_open', function (tokens, idx) {
        // Add target="_blank" and rel="noopener noreferrer" to external links so they open in a new tab
        // All links should be formatted in code without the domain name, so adding 'jperson.dev' is just a safeguard
        const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href')
        
        if (href && (!href.includes('jperson.dev') && !href.startsWith('/') && !href.startsWith('#'))) {
            tokens[idx].attrPush([ 'target', '_blank' ])
            tokens[idx].attrPush([ 'rel', 'noopener noreferrer' ])
        }
    })
    config.setLibrary('md', md)
    config.addPairedShortcode("markdown", (content) => {
        return md.render(content);
    })

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        },
    }
}
