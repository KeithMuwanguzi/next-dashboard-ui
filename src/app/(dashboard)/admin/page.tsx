import AnnouncementsCard from "@/components/Announcement"
import AttendanceChart from "@/components/AttendanceChart"
import CalendarCard from "@/components/Calendar"
import CountChart from "@/components/CountChart"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"


const userCardData = [
    { type: "Students", number: 1230 },
    { type: "Teachers", number: 100 },
    { type: "Parents", number: 800 },
    { type: "Staff", number: 50 }
];

const AdminPage = () => {
    return (
        <div className="p-4 flex flex-col gap-4 md:flex-row">
            {/**LEFT CONTENTS */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/**USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    {userCardData.map((data) => (
                        <UserCard key={data.type} type={data.type} number={data.number} />
                    ))}
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[400px]">
                        <CountChart/>
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[400px]">
                        <AttendanceChart/>
                    </div>
                </div>
                {/* FINANCE CHART */}
                <div className="w-full h-[450px]">
                    <FinanceChart/>
                </div>
            </div>
            {/**RIGHT CONTENTS */}
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

export default AdminPage