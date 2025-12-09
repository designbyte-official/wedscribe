import { GoogleGenAI } from "@google/genai";
import { BiodataProfile } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateProfessionalBio = async (profile: BiodataProfile): Promise<string> => {
  const ai = getClient();
  
  const prompt = `
    Create a polite, professional, and appealing matrimonial 'About Me' description (approx 60-80 words) for the following person.
    It should be suitable for an Indian marriage biodata.
    
    Details:
    Name: ${profile.personal.fullName}
    Education: ${profile.education.education}
    Profession: ${profile.education.occupation} at ${profile.education.company}
    Family Values: ${profile.family.familyValues}
    Personality Traits to imply: Cultured, family-oriented, ambitious.
    
    Output ONLY the text paragraph. Do not include quotes.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};