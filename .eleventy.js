import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import dotenv from 'dotenv';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

dotenv.config();

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
    ]);
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

    config.addPassthroughCopy("src/assets/img");
    config.addPassthroughCopy("src/assets/files");

    config.addPlugin(eleventyImageTransformPlugin);
    config.addPlugin(eleventyNavigationPlugin);

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
