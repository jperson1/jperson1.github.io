import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default (config) => {
    config.addPlugin(eleventyNavigationPlugin);

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site",
        },
    };
};
