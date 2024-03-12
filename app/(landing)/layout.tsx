const image =[{
    image :"https://static.vecteezy.com/system/resources/previews/017/744/080/non_2x/blue-artificial-intelligence-technology-background-hd-free-photo.jpg",
    image2:"https://img.pikbest.com/origin/09/28/35/25KpIkbEsTf4R.jpg!w700wp"
}]

const LandingLayout = ({
    children
}:{
    children:React.ReactNode
})=>{
    return (
        <main className="h-full overflow-auto bg-[#111827]"style={{
            backgroundImage:`url("")`
        }}>
            <div className="mx-auto max-w-screen-xl h-full">
                {children}
            </div>
        </main>
    )
}
export default LandingLayout