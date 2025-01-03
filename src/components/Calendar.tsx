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
        time: "09:00 AM"
    },
    {
        id: 2,
        title: "Parent Conference",
        desc: "Term progress discussion with parents",
        time: "02:30 PM"
    },
    {
        id: 3,
        title: "Sports Day",
        desc: "Annual school sports competition",
        time: "10:00 AM"
    },
    {
        id: 4,
        title: "Board Meeting",
        desc: "School board quarterly meeting",
        time: "04:00 PM"
    }
];

const CalendarCard = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className="">
                <div className='flex justify-between p-4'>
                    <h1 className="font-semibold">Events</h1>
                    <Image src="/moreDark.png" alt='' width={20} height={20}/>
                </div>
                {events.map(
                        e=> (
                            <div className="px-4" key={e.id}>
                                <span className="">{e.title}</span>
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}

export default CalendarCard