import { TargetOptions } from '@angular-builders/custom-webpack';
// import * as cheerio from 'cheerio';

// Tap Angular CLI's Webpack config
export default (targetOptions: TargetOptions, indexHtml: string) => {

    // May want to load a wasm module this way
    // module.exports = {'resolve': {'extensions': ['.wasm']}};

    // const $ = cheerio.load(indexHtml);

    // $('script').each((_, el) => {
    //     if ($(el).attr('defer') !== undefined) {
    //         return;
    //     }
    //     $(el).attr('async', 'true');
    // });

    // for (const file of files) {
    //     $('body').append(`
    //         <script src="${post}" ${post.includes('es5') ? 'nomodule defer' : 'type="module" async'}></script>
    //     `);
    // }
    // const html = $.html().replace('rel="stylesheet"', `rel="preload" onload="this.rel='stylesheet'" as="style"`);
    // return html;
};
