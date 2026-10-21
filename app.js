const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || "unknown";
const VERSION = process.env.VERSION || "v1";

app.get("/", (req, res) => {
  res.json({
    application: "Stage to Prod Lab",
    environment: ENVIRONMENT,
    version: VERSION,
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});