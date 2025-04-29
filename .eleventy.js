import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import dotenv from 'dotenv';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import pluginPDFEmbed from "eleventy-plugin-pdfembed";

dotenv.config();

export default (config) => {
    //compile tailwind before eleventy processes the files
    config.on('eleventy.before', async () => {
        const tailwindInputPath = path.resolve('./src/assets/css/index.css');

        const tailwindOutputPath = './_site/assets/css/index.css';

        const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

        const outputDir = path.dirname(tailwindOutputPath);
        if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        }

        const result = await processor.process(cssContent, {
        from: tailwindInputPath,
        to: tailwindOutputPath,
        });

        fs.writeFileSync(tailwindOutputPath, result.css);
    });

    const processor = postcss([
        //compile tailwind
        tailwindcss(),

        //minify tailwind css
        cssnano({
        preset: 'default',
        }),
    ]);

    config.addPassthroughCopy("src/assets/img");

    config.addPlugin(eleventyImageTransformPlugin);
    config.addPlugin(eleventyNavigationPlugin);
    console.log("yoo rofl" + process.env.PDF_EMBED_API_KEY)
    config.addPlugin(pluginPDFEmbed, {
		key: process.env.PDF_EMBED_API_KEY
	});

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        },
    };
};
