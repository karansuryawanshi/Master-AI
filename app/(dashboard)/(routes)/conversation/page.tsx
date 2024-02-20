"use client";

import axios from "axios";
import * as z from   "zod";
import {Heading} from "@/components/heading"
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import {formSchema} from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {EmptyConversation} from "@/components/empty"
import { ChatCompletionRequestMessage }  from "openai";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import {Mike} from "@/components/mike"
import { Icon } from '@iconify/react';
import { Transcriptions } from "openai/resources/audio/transcriptions.mjs";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { useEffect } from "react";
import { incrementApiLimit,checkApiLimit } from "@/lib/appLimit";

const ConversationPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const [isListening, setIsListening] = useState(false);

    const mike = () =>{
      if (!isListening) {
          SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
          setIsListening(true);
          } 
          else{
            SpeechRecognition.stopListening(); 
            setIsListening(false);
          }
        }
    const { transcript, stopSpeechRecognition, listening } = useSpeechRecognition();

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });
  
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
          try {
            const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
            const newMessages = [...messages, userMessage];
  
            const response = await axios.post('/api/conversation', { messages: newMessages });
            setMessages((current) => [...current, userMessage, response.data]);
              console.log(response)
            form.reset();
          } catch (error:any) {
              console.log(error)
          } finally{
            router.refresh();
          }
    }   
        const NewMessage = messages;
        const [isSpeaking, setIsSpeaking] = useState(false);

        const speak = (comingText:string) => {
            console.log(comingText)
            const text = comingText;
              if (!isSpeaking) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'hi-IN';
                window.speechSynthesis.speak(utterance);
                setIsSpeaking(true);
              } else {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
              }
            }
        
    
    return (
    <div >
      <Heading
      title = "Conversation"
      description="Our most advanced conversation Model"
      icon={MessageSquare}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
      ></Heading>
      <div className="px-4 lg:px-8">
        <div>
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                    <FormField
                    name="prompt"
                    render={({ field }) => (    
                        <FormItem className="col-span-12 lg:col-span-10">
                            <FormControl className="m-0 p-0">
                                <Input 
                                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                    disabled={isLoading}
                                    placeholder="How do I calculate the radius of circle"
                                    {...field}

                                />
                            </FormControl >
                        </FormItem>
                    )}
                    />
                    <div className="flex">
                        <div className="hover:cursor-pointer" onClick={() => mike()}>
                            <Icon icon="iconoir:microphone-speaking-solid" width="40" />
                        </div>
                        <Button className="col-span-12 px-14 mx-3 lg:col-span-2 w-full" disabled={isLoading}>
                            Generate
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
        
        <div className="space-y-4 mt-4">
            {isLoading &&(
                <div className="p-8 rounded-lg w-full flex item-center justify-center bg-muted">
                    <Loader/>
                </div>
            )}
            {messages.length === 0 && !isLoading && (
                <div className="item-center justify-center">
                    <EmptyConversation label="No Conversation started"/>
                </div>
            )}
                
            <div className="flex flex-col-reverse gap-y-4">
                {messages.map((message, index, values) => (

                    <div
                        key={message.content}
                        className={cn(
                        "p-8 w-full flex item-start gap-x-8 rounded-lg",
                        message.role === "user" ? "bg-white border border-black/10" :
                        "bg-muted"
                        )}
                        >                        
                        {message.role === "user"?<UserAvatar/>:<BotAvatar/>}
                        <p>{message.content} </p>

                        { message.role != "user" &&
                        <div 
                        className="flex flex-end justify-end p-2 m-auto rounded-full lg:text-5xl bg-opacity-0 text-black-500 cursor-pointer duration-300 hover:opacity-70 bg-[#c8e5ff] bg-opacity-50 transition-opacity "
                        >
                            <VolumeUpSharpIcon onClick={() => speak(message.content)}/>
                        </div>
                        }                        
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="container">

        <div className="main-content">
            <p>Hello Buddy=============== {transcript}</p>
        </div>
      </div>
    </div>
  )     
}

export default ConversationPage;