"use client"

import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro:boolean;
}

export const SubscriptionButton = ({
    isPro=false
}:SubscriptionButtonProps)=>{

    
    const [loading, setLoading] = useState(false)

    const onClick = async()=>{
        try {
            const response = await axios.get("/api/stripe")
            window.location.href = response.data.url;
        } catch (error) {
            // console.log("Billing Error",error)
            toast.error("Something went wrong")
        } finally{
            setLoading(false)
        }

    }

    return (
        <Button disabled={loading} variant={isPro? "default":"premium"}onClick={onClick}>
            {isPro? "Manage Subscription":"Upgrade"}
            {!isPro && <Zap className="w-4 h-4 fill-white"/>}
        </Button>
    )
}