"use client";
import { Card } from "@/components/ui/card";
import {ArrowRight, MessageSquare,Music,Image, VideoIcon,Code} from "lucide-react"
import {cn} from "@/lib/utils"
import {useRouter} from "next/navigation"
const tools = [
  {
    label:"Conversation",
    icon :  MessageSquare,
    color: "text-violet-700",
    bgColor: "bg-violet-500/10",
    href : "/conversation"
  },
  {
    label:"Music Generation",
    icon :  Music,
    color: "text-emerald-500",
    bgColor: "bg-green-700/10",
    href : "/music"
  },
  {
    label:"Image Generation",
    icon :  Image,
    color: "text-pink-700",
    bgColor: "bg-pink-900/10",
    href : "/image"
  },
  {
    label:"Video Generation",
    icon :  VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href : "/image"
  },
  {
    label:"Code Generation",
    icon :  Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href : "/code"
  },
]

const DashboardPage=()=> {
  const router = useRouter();
  return (
    <div>
        <div className="mb-8 space-y-4 " >
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Explore the power of AI
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Chat with the smartest AI - Experiance the power of AI
          </p>
        </div>
        
        <div className="px-4 md:px-20 lg:px-32 space-y-6">
          {tools.map((tool)=>(
            <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-2 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"> 
              <div className="flex item-center gap-x-4">
                <div className={cn("p-2 w-fit round-md", tool.bgColor)}>
                  <tool.icon className= {cn("w-8 h-8",tool.color)}/>
                </div>
                <div className="font-semibold mt-3">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5"/>
            </Card>
          ))}
        </div>
    </div>
  );
}

export default DashboardPage;
