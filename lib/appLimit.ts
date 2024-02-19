import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const incrementApiLimit = async () => {
  const { userId } = auth();

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

export default async function userId() {
  const {userId} = auth(); 
  console.log(userId)

  if (!userId) {
    return false;
  }

  const userLimit = await  prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  if (!userLimit || userLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
}


export const checkApiLimit = async () => {
  // export default async function checkApiLimit() {

  //   const {userId} = auth(); 
  // console.log(userId)
  // await userId();


  if (!userId) {
    return false;
  }

  const userLimit = await  prismadb.userApiLimit.findUnique({
    where: { userId: userId },
  });

  if (!userLimit || userLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

// // export const getApiLimitCount = async () => {
// //   const { userId } = auth();

// //   if (!userId) {
// //     return 0;
// //   }

// //   const userApiLimit = await prismadb.userApiLimit.findUnique({
// //     where: {
// //       userId
// //     }
// //   });

// //   if (!userApiLimit) {
// //     return 0;
// //   }

// //   return userApiLimit.count;
// // };
