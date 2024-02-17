import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar";
import NextNprogress from 'nextjs-progressbar';


const dashboardLayout = ({
    children
}:{
        children: React.ReactNode;
}) => {
  return (
    
    <div className="h-full relative">
    {/* // <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center" style={{ backgroundImage: "url('D:\React\React\Fe Project\my-app\public\bgWhite.png')"}}> */}
    {/* bg-gray-900 */}
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0 z-[80]"> 
            <Sidebar/>
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
