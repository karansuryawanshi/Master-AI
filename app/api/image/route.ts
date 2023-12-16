import {OpenAI} from "openai" 
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

// const instructionMessage= {
//   role: "system",
//   content: "You are a AI Model. You must answer questions. Use examples for explanations. If someone ak about you thn tell hin that, 'I am MasterAI Develop by MsaterAI team'",
// };

  export async function POST(
    req: Request
  ) 
  {
      const body = await req.json();
      const { prompt, amount = 1, resolution = "512x512" } = body;
      const response = await openai.images.generate({
        prompt,
        n: parseInt(amount, 10),
        size: resolution,
      });
      return NextResponse.json(response.data);
    }


