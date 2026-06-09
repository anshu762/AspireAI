import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("No API key");
    return;
  }
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.list();
  for (const model of response) {
      console.log(model.name);
  }
}

main().catch(console.error);
