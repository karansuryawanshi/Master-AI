import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 item-center justify-center">
        <div className="w-10 h-10 relative animate-spin">
            <Image
                fill
                alt="logo"
                src="/logo3.png"
                />
        </div>
        <p className="text-sm text-muted-forground">
            MasterAI is thinking
        </p>
    </div>
  )
}


