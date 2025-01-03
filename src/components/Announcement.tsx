const announcements = [
    {
        id: 1,
        title: "School Closure Notice",
        message: "Due to severe weather conditions, school will remain closed on Monday, February 12th."
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        message: "Annual parent-teacher conference scheduled for February 15th from 2 PM to 5 PM."
    },
    {
        id: 3,
        title: "Sports Day",
        message: "Inter-house sports competition will be held on February 20th. All students must participate."
    },
    {
        id: 4,
        title: "Exam Schedule",
        message: "Mid-term examinations will commence from March 1st. Schedule to be posted next week."
    }
];


const AnnouncementsCard = () => {
    return (
        <div className="my-4 bg-white rounded-md w-full h-full p-4">
            {/**TITLE */}
            <div className="text-[13px] font-semibold">Announcements</div>
            {/**Announcements */}
            <div className="max-h-[250px] overflow-y-auto">
                {announcements.map(announcement => (
                    <div key={announcement.id} className="p-3 rounded-md border-2 odd:bg-lamaSky even:bg-lamaPurple my-4">
                        <h1 className="text-[13px] text-gray-600 font-semibold">{announcement.title}</h1>
                        <span className="text-[11px] text-gray-500">{announcement.message}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnnouncementsCard