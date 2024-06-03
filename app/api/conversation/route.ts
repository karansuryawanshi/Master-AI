// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { incrementApiLimit,checkApiLimit } from "@/lib/appLimit";
import { checkSubscription } from "@/lib/subscription";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

// console.log(openai)

const instructionMessage= {
  role: "system",
  content: "You are a AI Model.you must answer each question. If someone ask about you then tell him that, 'I am MasterAI Develop by MasterAI team'",
};

  export async function POST(
    req: Request
  ) 
  {
      const { userId } = auth();
      const body = await req.json();
      const { messages  } = body;
  
      if (!messages) {
        return new NextResponse("Messages are required", { status: 400 });
      }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro){
          return new NextResponse("Free trail has expired",{status:403});
        }

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages :[instructionMessage, ...messages]
      });

      if(!isPro){
        await incrementApiLimit()
      }
      
      return NextResponse.json(response.choices[0].message);
    }