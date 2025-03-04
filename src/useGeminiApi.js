import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getGeminiResponse(userProblem) {
  if (!API_KEY) {
    throw new Error('Please set your Gemini API key in the .env file');
  }

  try {
    // const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are an AI trained to provide guidance strictly based on the Bhagavad Gita. When a user submits a real-life problem, analyze it deeply and respond with wisdom from the Bhagavad Gita.

**Response Structure:**
Relevant Bhagavad Gita Verse: Provide a suitable shloka in Sanskrit along with its chapter and verse number.
English Translation: Give an accurate and concise translation of the verse.
Simple Explanation: Interpret the verse in a clear and easy-to-understand way, keeping it aligned with the original meaning.
Practical Application: Offer actionable advice on how the user can apply this wisdom in their life.
Motivational Closing: End with an uplifting and encouraging message inspired by the Gita.

Guidelines:
- Do not include any teachings outside of the Bhagavad Gita.
- Keep the response insightful, structured, and within 150-200 words.
- Ensure the tone remains empathetic, wise, and motivating.
- Avoid unnecessary elaboration; keep the focus on Bhagavad Gita's wisdom.

User's Problem: "${userProblem}"
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response);
    return response.text();
  } catch (error) {
    if (!API_KEY) {
      throw new Error('Missing API key. Please set VITE_GEMINI_API_KEY in your .env file');
    }
    console.error('Error generating response:', error);
    throw new Error('Failed to get response from Gemini. Please try again later.');
  }
}