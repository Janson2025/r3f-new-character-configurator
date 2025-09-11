// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// === PRODUCTION HUB ORIGIN ONLY ===
const HUB_ORIGIN = "https://r3f-portfolio-hub.onrender.com";

// Add CSP allowing ONLY your hub to frame this site
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    `frame-ancestors 'self' ${HUB_ORIGIN}`
  );
  // Ensure no X-Frame-Options header conflicts with CSP
  res.removeHeader("X-Frame-Options");
  next();
});

// Serve the Vite build
const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`▶ Project listening on http://localhost:${PORT}`);
});
