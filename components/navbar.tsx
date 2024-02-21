import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/appLimit"

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return ( 
    <div className="flex item-centre p-4"  >
      <MobileSidebar apiLimitCount={apiLimitCount}/> 
      <div className="flex w-full justify-end ">
        <UserButton afterSignOutUrl="/"/> 
      </div>
    </div>
  )
}

export default Navbar
