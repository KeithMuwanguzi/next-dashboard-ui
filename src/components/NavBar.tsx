import Image from "next/image"

const NavBar = () => {
    const number  = 12;
    return (
        <div className="flex items-center justify-between p-4">
            {/**Search Bar */}
            <div className="hidden md:flex items-center gap-2 h-7 text-xs rounded-full ring-[1.5px] ring-gray-200 px-2">
                <Image src="/search.png" alt="" width={10} height={10}/>
                <input type="text" placeholder="Search ..." className="w-[200px] p-2 bg-transparent outline-none"/>
            </div>
            {/**Icons and Name */}
            <div className="flex items-center gap-5 w-full justify-end">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="" width={20} height={20}/>
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="" width={20} height={20}/>
                    <div className="absolute -top-2 -right-3 w-4 h-4 text-white flex items-center justify-center bg-purple-500 rounded-full">
                        <span className="text-[10px]">{number}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] leading-3 font-medium">Keith Muwanguzi</span>
                    <span className="text-[8px] text-gray-500 text-right">Admin</span>
                </div>
                <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full cursor-pointer"/>
            </div>
        </div>
    )
}

export default NavBar