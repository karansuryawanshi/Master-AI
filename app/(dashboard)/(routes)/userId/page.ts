import { auth } from "@clerk/nextjs";

export default async function userId() {
  const {userId} = auth(); 
  console.log(userId)
}