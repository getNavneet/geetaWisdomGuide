import axios from "axios";
import { BACKEND_API_URL } from "../config.js";

export async function getServerResponse(userProblem) {
  if (!BACKEND_API_URL) {
    throw new Error('Server Not reachable. Please try again later.');
  }

  try {
    const response = await axios.post(`${BACKEND_API_URL}/api/v1/query/get`, {
      query: userProblem,
    });

    if (response.status !== 200) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    console.log("Server Response:", response.data.AIResponse);

    return response.data.AIResponse;
 


  } catch (error) {
    if (!API_KEY) {
      throw new Error('Missing API key. Please set VITE_GEMINI_API_KEY in your .env file');
    }
    console.error('Error generating response:', error);
    throw new Error(`Failed to get response from Gemini. Please try again later. err= ${error.message}`);
  }
}