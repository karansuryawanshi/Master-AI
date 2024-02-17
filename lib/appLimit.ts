// import { auth } from '@clerk/nextjs';
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { useSession } from "@clerk/nextjs";
// import { NextApiRequest, NextApiResponse } from "next";

export const incrementApiLimit = async () => {
  const {userId} = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {

  const page =()=>{
    const userId = auth();
    console.log(userId)
  }
  
  // const {session} = useSession()
  // console.log(session)

  try {
    const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
  } catch (error) {
    console.log(error)
  } 
  
};

// export const getApiLimitCount = async () => {
//   const { userId } = auth();

//   if (!userId) {
//     return 0;
//   }

//   const userApiLimit = await prismadb.userApiLimit.findUnique({
//     where: {
//       userId
//     }
//   });

//   if (!userApiLimit) {
//     return 0;
//   }

//   return userApiLimit.count;
// };