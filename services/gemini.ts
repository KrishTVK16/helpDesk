import { GoogleGenAI } from "@google/genai";
import { Ticket } from "../types";

/**
 * Service using @google/genai to provide intelligent IT support insights.
 */

export const analyzeTicketDeep = async (title: string, description: string) => {
  // Use gemini-3-pro-preview for deep architectural reasoning with thinking budget
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Analyze this IT ticket deeply and provide architectural insights: Title: ${title}, Description: ${description}`,
    config: {
      thinkingConfig: { thinkingBudget: 32768 }
    }
  });
  return response.text || "No detailed analysis available.";
};

export const analyzeTicket = async (title: string, description: string) => {
  // Use gemini-3-flash-preview for general triage
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this IT ticket and suggest a category and immediate action: Title: ${title}, Description: ${description}`,
  });
  return response.text || "General insight unavailable.";
};

export const generateVeoVideo = async (imageB64: string, prompt: string) => {
  // Use veo-3.1-fast-generate-preview for video generation
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const base64Data = imageB64.split(',')[1] || imageB64;
  
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    image: {
      imageBytes: base64Data,
      mimeType: 'image/png',
    },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });

  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    operation = await ai.operations.getVideosOperation({operation: operation});
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  // Video link requires API key as query parameter
  return `${downloadLink}&key=${process.env.API_KEY}`;
};

export const generateTicketSummary = async (tickets: Ticket[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const ticketList = tickets.map(t => `- [${t.priority}] ${t.title}: ${t.description}`).join('\n');
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Provide a high-level system health summary based on these tickets:\n${ticketList}`,
  });
  return response.text || "System summary unavailable.";
};