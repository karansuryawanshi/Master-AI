import React from 'react'
import { Dialog,DialogContent,DialogDescription,DialogHeader, DialogTitle,DialogFooter } from './ui/dialog'
import { useProModel } from '@/hooks/use-pro-model'
import { Badge } from "@/components/ui/badge"
import {ArrowRight, MessageSquare,Music,Image, VideoIcon,Code,Check,Zap} from "lucide-react"
import { Button } from './ui/button'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { colors } from '@mui/material'

const tools = [
    {
      label:"Conversation",
      icon :  MessageSquare,
      color: "text-violet-700",
      bgColor: "bg-violet-500/10",
    },
    {
      label:"Music Generation",
      icon :  Music,
      color: "text-emerald-500",
      bgColor: "bg-green-700/10",
    },
    {
      label:"Image Generation",
      icon :  Image,
      color: "text-pink-700",
      bgColor: "bg-pink-900/10",
    },
    {
      label:"Video Generation",
      icon :  VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
    },
    {
      label:"Code Generation",
      icon :  Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
    },
  ]
  

const ProModel = () => {

    const proModal = useProModel()

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
                    <div className='flex items-center font-bold gap-x-2 py-1'>
                        Upgrade to Master AI
                        <Badge className='uppercase text-sm py-1' variant="premium">Pro</Badge>
                    </div>
                </DialogTitle>
                <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                    {tools.map((tool) => (
                    <Card key={tool.href} className="p-3 border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                            <tool.icon className={cn("w-6 h-6", tool.color)} />
                        </div>
                        <div className="font-semibold text-sm">
                            {tool.label}
                        </div>
                        </div>
                        <Check className="text-primary w-5 h-5" />
                    </Card>
                    ))}
          </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button 
                    className='w-full'
                    size="lg"
                    variant="premium"
                    >
                    Upgrade
                    <Zap className='w-4 h-4 ml-4 fill-white'>

                    </Zap>
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ProModel
