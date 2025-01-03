"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 2490,
    expense: 4400,
  },
  {
    name: 'Aug',
    income: 3400,
    expense: 4350,
  },
  {
    name: 'Sep',
    income: 3990,
    expense: 6300,
  },
  {
    name: 'Oct',
    income: 2490,
    expense: 3300,
  },
  {
    name: 'Nov',
    income: 3690,
    expense: 4800,
  },
  {
    name: 'Dec',
    income: 2850,
    expense: 5000,
  }  
];
const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl p-4 w-full h-full'>
            {/**TITLE */}
            <div className="flex justify-between">
                <h1 className="">Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            {/**CHART */}
            <div className="">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"20px"}}/>
                        <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={3} />
                        <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart
