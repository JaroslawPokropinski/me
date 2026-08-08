import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import { resolve } from "path";
import { homepage } from "../package.json";
import { appNavigation } from "../src/navigation";
import { Readable } from "stream";

const routes = appNavigation.flatMap((item) => {
  if ("path" in item) {
    return item.path;
  }

  if ("items" in item) {
    return item.items.map((subItem) => subItem.path);
  }

  return [];
});

const links = routes.map((path, idx) => ({
  url: `#${path}`,
  changefreq: "weekly" as const,
  priority: idx === 0 ? 1.0 : 0.8,
}));

// const stream = new SitemapStream({ hostname: homepage });
// links.forEach((l) => stream.write(l));
// stream.end();
// const sitemap = await streamToPromise(stream);

// writeFileSync(resolve("dist/sitemap.xml"), sitemap.toString());
// console.log("Generated dist/sitemap.xml");

const stream = new SitemapStream({ hostname: homepage });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) =>
    fs.promises.writeFile(resolve("dist/sitemap.xml"), data.toString()),
  )
  .then(() => {
    console.log("Generated dist/sitemap.xml");
  });
