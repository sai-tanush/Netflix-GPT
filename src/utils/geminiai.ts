import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiAPI = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiAPI);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default model;