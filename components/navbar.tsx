import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/appLimit"
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()
  return ( 
    <div className="flex item-centre p-4"  >
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount}/> 
      <div className="flex w-full justify-end ">
        <UserButton afterSignOutUrl="/"/> 
      </div>
    </div>
  )
}

export default Navbar
