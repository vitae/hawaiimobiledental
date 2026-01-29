import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OPENAI_API_KEY not set in environment variables.");
  process.exit(1);
}

async function listModels() {
  const res = await fetch("https://api.openai.com/v1/models", {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
  });
  if (!res.ok) {
    console.error("Failed to fetch models:", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  console.log("Available models:");
  for (const model of data.data) {
    console.log("-", model.id);
  }
}

listModels();
