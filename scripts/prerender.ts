import Prerenderer from "@prerenderer/prerenderer";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";
import fs from "fs";
import path from "path";
import { appNavigation } from "../src/navigation";
import * as cheerio from "cheerio";

const routes = [
  "/index.html",
  ...appNavigation.flatMap((itemOrGroup) => {
    if ("path" in itemOrGroup) {
      return itemOrGroup.path;
    }

    if ("items" in itemOrGroup) {
      return itemOrGroup.items.map((subItem) => subItem.path);
    }

    return [];
  }),
];

async function prerender() {
  const distDir = path.resolve("dist");
  const prerenderer = new Prerenderer({
    staticDir: distDir,
    renderer: new PuppeteerRenderer({
      renderAfterTime: 5000,
    }),
    postProcess(renderedRoute) {
      console.log(`Prerendered route: ${renderedRoute.originalRoute}`);
      const routePath =
        renderedRoute.originalRoute === "/index.html"
          ? ""
          : renderedRoute.originalRoute;
      const outputDir = routePath ? path.join(distDir, routePath) : distDir;
      const outputFile = path.join(outputDir, "index.html");

      const $ = cheerio.load(renderedRoute.html);
      // // remove image sources from the prerendered HTML
      // $("img").each((_, img) => {
      //   $(img).attr("src", "");
      // });

      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputFile, $.html());
    },
  });

  await prerenderer.initialize();
  await prerenderer.renderRoutes(routes);
  await prerenderer.destroy();
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
