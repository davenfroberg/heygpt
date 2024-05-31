import OpenAI from "openai";

const apiKey: string | undefined = process.env.API_KEY;
const orgId: string | undefined = process.env.ORG_ID;

if (!apiKey) {
  throw new Error('API_KEY environment variable is required');
}

if (!orgId) {
  throw new Error('ORG_ID environment variable is required');
}

const prompt : string  = "Give me 5 synonyms for the word computer";

const openai : OpenAI = new OpenAI({
    organization: orgId,
    apiKey: apiKey
});

export async function streamGpt() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are an assistant that is supposed to be as brief as possible. Please answer" +
                "the questions in the simplest way possible. Make sure you are clear but in as few sentences as possible." },
            { role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]['message']['content']);
}