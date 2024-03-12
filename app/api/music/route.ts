// import {Configuration} from "openai" 
// import {OpenAIApi, OpenAI} from "openai";
import {OpenAI} from "openai" 
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate"
import { incrementApiLimit,checkApiLimit } from "@/lib/appLimit";
import { checkSubscription } from "@/lib/subscription";


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
      const isPro = await checkSubscription();

      if (!freeTrial && !isPro){
        return new NextResponse("Free trail has expired",{status:403});
      }

      const response = await replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            // alpha: 0.5,
            prompt_a: prompt,
            // prompt_b: "90's rap",
            // denoising: 0.75,
            // seed_image_id: "vibes",
            // num_inference_steps: 50
          }
        }
      );

      if(!isPro){
        await incrementApiLimit();
      }

      // console.log(output);

      // console.log('Response here;', response.choices[0].message)
  
      return NextResponse.json(response);
    }
    // catch (error) {
    //     console.log('[CONVERSATION_ERROR]', error);
    //     return new NextResponse("Internal Error", { status: 500 });
    //   }
    // };