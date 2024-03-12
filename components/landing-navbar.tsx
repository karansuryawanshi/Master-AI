"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
    weight:"600",
    subsets:["latin"]
})

export const LandingNavbar =()=>{
    const {isSignedIn} = useAuth();
    return(
        <nav className="p-4bg-transparent flex items-center justify-between pt-4">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image
                    fill
                    alt="logo"
                    src="/logo3.png"
                    >
                    </Image>
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    Master AI
                </h1>
            </Link>
            <div>
                <Link href={isSignedIn? "/dashboard":"/sign-up"}>
                    <Button variant="outline">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}