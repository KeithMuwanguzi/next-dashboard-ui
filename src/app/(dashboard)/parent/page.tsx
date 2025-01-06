import AnnouncementsCard from "@/components/Announcement"
import CalendarCard from "@/components/Calendar"

const ParentPage = () => {
    return (
        <div className="flex flex-col justify-center gap-4 m-4 md:flex-row">
            {/**LEFT CONTENTS */}
            <div className="w-full md:w-2/3">
                <div className="h-full bg-white rounded-md p-4">
                    <h1 className="text-[13px] font-semibold">Schedule (4A)</h1>
                </div>
            </div>
            {/**RIGHT CONTEXTS */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                {/**CALENDAR CARD */}
                <div className="">
                    <div className="">
                        <CalendarCard/>
                    </div>
                    <div className="h-[300px]">
                        <AnnouncementsCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentPage