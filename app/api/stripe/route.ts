import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import axios from "axios";

const settingUrl = absoluteUrl("/settings")

export async function GET(){
    try {

        const {userId} = auth();
        const user = await currentUser();

        // console.log("user is present",user)
        // console.log("userID is present",userId)

        if(!userId || !user){
            return new NextResponse("unauthorised",{status:401})
        }

        const userSubscription = await prismadb.userSubscription.findUnique({
            where:{
                userId
            }
        })
        // console.log("Subscription",userId)
        // console.log("UserSubscription",userSubscription)

        if(userSubscription && userSubscription.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer:userSubscription.stripeCustomerId,
                return_url:settingUrl,
            })

            console.log('Hello')
            console.log(stripeSession)
            return new NextResponse(JSON.stringify({url:stripeSession.url}))
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url:settingUrl,
            cancel_url:settingUrl,
            payment_method_types:["card"],
            mode:"subscription",
            billing_address_collection:"auto",
            customer_email:user.emailAddresses[0].emailAddress,
            line_items:[
                {
                    price_data:{
                        currency:"USD",
                        product_data:{
                            name:"Master Ai Pro",
                            description:"Unlimited AI Generations",
                        },
                    unit_amount:2000,
                    recurring:{
                        interval:"month",
                        },
                    },
                    quantity:1,
                }
            ],
            metadata:{
                userId,
            }
        })

        console.log("stripeSession",stripeSession)

        return new NextResponse(JSON.stringify({url:stripeSession.url}))
    } catch (error) {
        console.log("[STRIPE_ERROR]",error)
        return new NextResponse("Internal error",{status:500})
    }
}