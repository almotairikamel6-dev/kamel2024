
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we'll log an error.
  console.error("API_KEY for Gemini is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const systemInstruction = `You are a helpful AI assistant for the Digital Omda Platform of the Al-Iskan and Al-Rawda neighborhoods in Buraydah, Saudi Arabia. 
Answer questions about the platform's services, neighborhood information, and general inquiries in a polite and concise manner. 
Your responses should be in the same language as the user's query.
The platform services include: Resident Registration, Real Estate Office Registration, downloading Official Forms, and providing news.
The Omda (neighborhood mayor) is Abdullah bin Mohammed Al-Saleh.
The platform is a digital initiative aligned with Saudi Vision 2030.`;


export const askAI = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "The AI assistant is currently unavailable. The API key is not configured.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};
