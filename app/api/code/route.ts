// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {OpenAIApi} from "openai";

const openAIApi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});
 
const instructionMessage= {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.only answer the question related to coding.If someone ak about you thn tell hin that, 'I am MasterAI Develop by MsaterAI team'",
};

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
      const response = await openAIApi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages :[instructionMessage, ...messages]
        // messages: [{ role: "system",
        //    content: "you are a code generator. you must answer only in markdown code snippets. use code comments for explanations." }],
        
      });
      // console.log("Response is ===>",response)

      // console.log('Response here;      ', response.choices[0].message)
  
      return NextResponse.json(response.choices[0].message);
    }
    // catch (error) {
    //     console.log('[CONVERSATION_ERROR]', error);
    //     return new NextResponse("Internal Error", { status: 500 });
    //   }
    // };