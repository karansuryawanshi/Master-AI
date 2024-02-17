interface EmptyProps {
    label:string;
}
import Image from "next/image"

export const Mike = ({
    label
}:EmptyProps) => {
  return (
    <div className=" flex ">
      <div className="relative h-10 w-10 hover:cursor-pointer">
      <Image
        alt = "Empty"
        fill 
        src = "/mike.svg"
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  )
}