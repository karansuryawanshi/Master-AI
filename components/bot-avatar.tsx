import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
  return (
    <div> 
      <Avatar className="h-8 w-8 ">
        <AvatarImage className="p-1" src="./logo3.png"/>
      </Avatar>
    </div>
  )
}