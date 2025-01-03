"use client";
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 50,
    absent: 70,
  },
  {
    name: 'Tue',
    present: 90,
    absent: 30,
  },
  {
    name: 'Wed',
    present: 100,
    absent: 20,
  },
  {
    name: 'Thur',
    present: 80,
    absent: 40,
  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  },
  {
    name: 'Sat',
    present: 10,
    absent: 110,
  },
  {
    name: 'Sun',
    present: 8,
    absent: 112,
  },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-xl p-4 w-full h-full">
            {/* TITLE */}
            <div className='flex justify-between'>
                <h1 className='text-[13px] font-semibold'>Teachers' Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            {/* CHART */}
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={15}
                    >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={13}/>
                    <YAxis axisLine={false} tickLine={false} fontSize={13}/>
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"20px"}}/>
                    <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
                    <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart