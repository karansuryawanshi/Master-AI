// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate"
import { incrementApiLimit,checkApiLimit } from "@/lib/appLimit";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!, 
});

// const instructionMessage= {
//   role: "system",
//   content: "You are a AI Model. You must answer questions. Use examples for explanations. If someone ak about you thn tell hin that, 'I am MasterAI Develop by MsaterAI team'",
// };

  export async function POST(
    req: Request
  ) 
  {
    // try {
      // const { userId } = auth();

    
      const body = await req.json();
      const { prompt } = body;      


    //   if (!userId) {
    //     return new NextResponse("Unauthorized", { status: 401 });
    //   }
  
      // if (!configuration.apiKey) {
      //   return new NextResponse("OpenAI API Key not configured.", { status: 500 });
      // }
  
      // if (!messages) {
      //   return new NextResponse("Messages are required", { status: 400 });
      // }
      // const response = await openai.chat.completions.create({
      //   model: 'gpt-3.5-turbo',
      //   messages :[instructionMessage, ...messages]
      // });


      const freeTrial = await checkApiLimit();

      if (!freeTrial){
        return new NextResponse("Free trail has expired",{status:403});
      }
      
      const response = await replicate.run(
        "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
        {
          input: {
            prompt: prompt
          }
        }
      );
      // console.log(output);

      // console.log('Response here;', response.choices[0].message)
      await incrementApiLimit();
        
      return NextResponse.json(response);
    }
    // catch (error) {
    //     console.log('[CONVERSATION_ERROR]', error);
    //     return new NextResponse("Internal Error", { status: 500 });
    //   }
    // };