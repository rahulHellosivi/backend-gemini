const { GoogleGenerativeAI } = require("@google/generative-ai");

const services = {
    init: () => {
        console.log("Initializing services...");
        console.log(process.env.API_KEY);
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        services.gemini = model;

        const chat = model.startChat({
            // history: [
            //     {
            //         role: "user",
            //         parts: [{ text: "Hello, I have 2 dogs in my house." }],
            //     },
            //     {
            //         role: "model",
            //         parts: [{ text: "Great to meet you. What would you like to know?" }],
            //     },
            // ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        services.chat = chat;
    },
    chat: null,
    gemini: null
}

module.exports = services;