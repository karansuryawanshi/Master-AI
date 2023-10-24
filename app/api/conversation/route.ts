// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

  export async function POST(
    req: Request
  ) 
  {
    // try {
    //   const { userId } = auth();
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
      // const response = await openai.createChatCompletion({
      //   model: "gpt-3.5-turbo",
      //   messages
      // });
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages
      });

      // console.log('Response here;      ', response.choices[0].message)
  
      return NextResponse.json(response.choices[0].message);
    }
    // catch (error) {
    //     console.log('[CONVERSATION_ERROR]', error);
    //     return new NextResponse("Internal Error", { status: 500 });
    //   }
    // };