import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "node:fs";
import path from "node:path";

async function createServer() {
  const app = express();

  // Create vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: "ssr" },
    appType: "custom",
  });
  app.use(vite.middlewares);

  app.use("*all", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      // Read index.html
      let template = fs.readFileSync(
        path.resolve("../client/dist/client/index.html"),
        "utf-8"
      );

      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);

      // Load server entry module that exports the render function
      const { render } = await vite.ssrLoadModule(
        "../client/dist/server/entry-server.js"
      );

      // Render app HTML
      const appHtml = await render(url);

      // Inject the rendered app HTML into template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5000);
  console.log("Server running at http://localhost:5000");
}

createServer();
