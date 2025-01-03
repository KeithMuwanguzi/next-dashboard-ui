import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
           <div className="flex justify-between text-xs">
                <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-500">2025/01/03</span>
                <Image src="/more.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>     
            <h1 className="text-2xl font-semibold my-4">1,230</h1>
            <h2 className="text-sm font-medium text-gray-500">{type}</h2>
        </div>
    )
}

export default UserCard