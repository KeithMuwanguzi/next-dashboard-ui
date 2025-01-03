"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Total',
        count: 2000,
        fill: 'white',
      },
  {
    name: 'Girls',
    count: 800,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 1200,
    fill: '#C3EBFA',
  },
 
  
];


const CountChart = () => {
    return (
        <div className=' bg-white p-4 rounded-xl w-full h-full'>
            <div className='flex justify-between'>
                <h1 className=''>Students</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <div className='w-full h-[80%] relative'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="110%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <div className='flex justify-center gap-10'>
                <div className='flex flex-col gap-1'>
                    <div className='w-4 h-4 bg-lamaSky rounded-full'/>
                    <h1 className='font-bold text-[15px]'>1,200</h1>
                    <h1 className='text-xs text-gray-300'>Boys (60%)</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-4 h-4 bg-lamaYellow rounded-full'/>
                    <h1 className='font-bold text-[15px]'>800</h1>
                    <h1 className='text-xs text-gray-300'>Girls (40%)</h1>
                </div>
            </div>
        </div>
        
    )
}

export default CountChart