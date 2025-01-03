"use client";
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Staff Meeting",
        desc: "Monthly staff review meeting",
        time: "09:00 - 11:00AM"
    },
    {
        id: 2,
        title: "Parent Conference",
        desc: "Term progress discussion with parents",
        time: "2:30 - 5:00PM"
    },
    {
        id: 3,
        title: "Sports Day",
        desc: "Annual school sports competition",
        time: "10:00 - 1:00PM"
    },
    {
        id: 4,
        title: "Board Meeting",
        desc: "School board quarterly meeting",
        time: "4:00 - 6:00PM"
    }
];

const CalendarCard = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className="">
                <div className='flex justify-between p-4'>
                    <h1 className="text-[13px] font-semibold">Events</h1>
                    <Image src="/moreDark.png" alt='' width={20} height={20}/>
                </div>
                {events.map(
                        e=> (
                            <div className='p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple m-2'>
                                <div className="flex justify-between" key={e.id}>
                                    <h1 className="font-semibold text-gray-600 text-[13px]">{e.title}</h1>
                                    <span className="text-[13px] text-gray-600">{e.time}</span>
                                </div>
                                <p className="text-[12px] text-gray-500">{e.desc}</p>
                            </div>
                            
                        )
                    )}
            </div>
        </div>
    )
}

export default CalendarCard