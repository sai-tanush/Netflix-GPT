import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCzc2_AbiVf6gmyCOfzFa9Pp9SefQMhC7I');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default model;