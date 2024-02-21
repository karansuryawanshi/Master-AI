// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { incrementApiLimit,checkApiLimit } from "@/lib/appLimit";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const instructionMessage= {
  role: "system",
  content: "You are a AI Model. You must answer questions. Use examples for explanations. If someone ak about you thn tell hin that, 'I am MasterAI Develop by MsaterAI team'",
};

  export async function POST(
    req: Request
  ) 
  {
    // try {
      const { userId } = auth();
      // console.log("User Id id--------",userId)
      const body = await req.json();
      const { messages  } = body;
      
    //   if (!userId) {
    //     return new NextResponse("Unauthorized", { status: 401 });
    //   }
  
      // if (!configuration.apiKey) {
      //   return new NextResponse("OpenAI API Key not configured.", { status: 500 });
      // }
  
      // if (!messages) {
      //   return new NextResponse("Messages are required", { status: 400 });
      // }

        const freeTrial = await checkApiLimit();

        if (!freeTrial){
          return new NextResponse("Free trail has expired",{status:403});
        }

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages :[instructionMessage, ...messages]
      });
      await incrementApiLimit();
      // console.log('Response here;', response.choices[0].message)
  
      return NextResponse.json(response.choices[0].message);
    }
    // catch (error) {
    //     console.log('[CONVERSATION_ERROR]', error);
    //     return new NextResponse("Internal Error", { status: 500 });
    //   }
    // };