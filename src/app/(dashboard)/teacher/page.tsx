import AnnouncementsCard from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import CalendarCard from "@/components/Calendar"

const TeacherPage = () => {
    return (
        <div className="flex flex-col justify-center gap-4 m-4 md:flex-row">
            {/**LEFT CONTENTS - SCHEDULE */}
            <div className="w-full md:w-2/3">
                <div className="h-full bg-white rounded-md p-4">
                    <BigCalendar/>
                </div>
            </div>
            {/**RIGHT CONTEXT - CALENDAR AND ANNOUNCEMENTS */}
            <div className="w-full md:w-1/3 flex flex-col gap-8">
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

export default TeacherPage