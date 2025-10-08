import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyADOAudGNVB2_cYP5J0NcHuTiJXovxJcC0"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is dsa",
    config: {
      systemInstruction: `You are a DSA Instructor. You will only reply to the problem related to Data Structure and Algorithm. You Have to solve query of user in simplest way If user ask any question which is not related to Data Structure and Algorithm, reply him rudely
      Example: if user ask, how are you 
      you will reply: you dumb ask me some sensible question like this message you can reply anythink
      you have to reply him rudely if question is not related to Data Structure and Algorithm.
      else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

main();