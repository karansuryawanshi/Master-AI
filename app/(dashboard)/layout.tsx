import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar";
import NextNprogress from 'nextjs-progressbar';
import { getApiLimitCount } from "@/lib/appLimit";
import { checkSubscription } from "@/lib/subscription";

const dashboardLayout = async ({
    children
}:{
        children: React.ReactNode;
}) => {

  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0 "> 
            <Sidebar isPro={isPro} apiLimitCount = {apiLimitCount}/>
        </div>  
        <main className="md:pl-72 ">
          {/* <NextNprogress /> */}
            <Navbar/>
            {children}
        </main>
    </div>
  )
}

export default dashboardLayout;
