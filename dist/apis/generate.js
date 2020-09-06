"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sitemap_1 = require("sitemap");
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
const slug_1 = require("../Framework/libs/slug");
function generate(server, services) {
    server.get("/api/sitemap", async (req, res) => {
        try {
            const smStream = new sitemap_1.SitemapStream({
                hostname: `https://www.mallorcaliverecordingstudio.com`,
            });
            // List of posts
            // const posts = [];
            smStream.write({ url: `/`, changefreq: 'weekly', priority: 1 });
            smStream.write({ url: `/contact`, changefreq: 'weekly', priority: 0.9 });
            smStream.write({ url: `/live`, changefreq: 'daily', priority: 0.9 });
            smStream.write({ url: `/studios`, changefreq: 'daily', priority: 0.9 });
            smStream.write({ url: `/recording`, changefreq: 'daily', priority: 0.9 });
            smStream.write({ url: `/rates`, changefreq: 'daily', priority: 0.9 });
            smStream.write({ url: `/streams`, changefreq: 'daily', priority: 0.9 });
            services.streamService.runService('GetAll', {
                token: req.cookies.token,
            }, async (err, reqs) => {
                if (err) {
                }
                else {
                    let post = reqs.streams;
                    post.forEach((post) => {
                        smStream.write({
                            url: `/stream/${moment_1.default(post.createdAt).format("DD-MM-YYYY")}/${slug_1.slugify(post.title)}/${post.id}`,
                            changefreq: 'weekly',
                            priority: 0.8
                        });
                    });
                }
                services.studioService.runService('GetAll', {
                    token: req.cookies.token,
                }, async (e, resp) => {
                    // @ts-ignore
                    if (e) {
                    }
                    else {
                        resp.Result.forEach((post) => {
                            smStream.write({
                                url: `/studio/${slug_1.slugify(post.title)}/${post.id}`,
                                changefreq: 'weekly',
                                priority: 0.8
                            });
                        });
                    }
                    // End sitemap stream
                    smStream.end();
                    // XML sitemap string
                    const sitemapOutput = (await sitemap_1.streamToPromise(smStream)).toString();
                    // Change headers
                    res.writeHead(200, {
                        'Content-Type': 'application/xml'
                    });
                    fs_1.default.writeFile("public/sitemap.xml", sitemapOutput, () => {
                    });
                    // Display output to user
                    res.end(sitemapOutput);
                });
            });
            // // Create each URL row
            // posts.forEach(post => {
            //     smStream.write({
            //         url: `/post/${post.slug}`,
            //         changefreq: 'daily',
            //         priority: 0.9
            //     });
            // });
        }
        catch (e) {
            console.log(e);
            res.send(JSON.stringify(e));
        }
    });
}
exports.default = generate;
//# sourceMappingURL=generate.js.map