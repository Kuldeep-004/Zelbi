import {GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4,
    },
    systemInstruction: `You are therapist with experience in treating anxiety. You are talking to a patient who is experiencing anxiety. You are trying to help the patient by providing some advice. you only give answer in short manner
       `
    
 });

export const generateResult=async(prompt)=>{
    
    const result = await model.generateContent(prompt);

    return result.response.text();
}

