/* eslint-disable @next/next/no-img-element */
'use client';

import { FaBuilding, FaGraduationCap, FaUsers} from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import Calendar from './Calendar';
import InstitutionOverview from './InstitutionOverview';

const DashboardOverview = () => {
  return (
<div>

    <div className="px-[2vw] py-[1vw]">

      <h1 className="md:text-[2.5vw] text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      <p className="md:text-[1.2vw] text-sm text-gray-500 mt-[0.5vh]">
        Welcome to your educational institutions management dashboard
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5vw] mt-[2vw]">
        {/* Card 1: Total Institutions */}
        <div className="bg-white md:p-[1.5vw] p-5 md:rounded-2xl rounded shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <p className="md:text-[1vw] text-gray-500 font-medium">Total Institutions</p>
            <p className="md:text-[2vw] text-2xl font-bold mt-[0.5vw]">5</p>
            <p className="md:text-[0.9vw] text-sm text-green-600 flex items-center mt-[0.3vw]">
              <MdTrendingUp className="text-[1vw] mr-[0.3vw]" />
              +2 this month
            </p>
          </div>
          <FaBuilding className="text-gray-400 md:text-[1.5vw] text-2xl" />
        </div>

        {/* Card 2: Total Students */}
        <div className="bg-white md:p-[1.5vw] p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <p className="md:text-[1vw] text-gray-500 font-medium">Total Students</p>
            <p className="md:text-[2vw] text-2xl font-bold mt-[0.5vw]">8</p>
            <p className="md:text-[0.9vw] text-sm text-green-600 flex items-center mt-[0.3vw]">
              <MdTrendingUp className="text-[1vw] mr-[0.3vw]" />
              +12% from last month
            </p>
          </div>
          <FaGraduationCap className="text-gray-400 md:text-[1.5vw] text-2xl" />
        </div>

        {/* Card 3: Total Staff */}
        <div className="bg-white md:p-[1.5vw] p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <p className="md:text-[1vw] text-gray-500 font-medium">Total Staff</p>
            <p className="md:text-[2vw] text-2xl font-bold mt-[0.5vw]">6</p>
            <p className="md:text-[0.9vw] text-sm text-green-600 flex items-center mt-[0.3vw]">
              <MdTrendingUp className="text-[1vw] mr-[0.3vw]" />
              +5 new hires
            </p>
          </div>
          <FaUsers className="text-gray-400 md:text-[1.5vw] text-2xl" />
        </div>

        {/* Card 4: Total Revenue */}
        <div className="bg-white md:p-[1.5vw] p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
          <div>
            <p className="md:text-[1vw] text-gray-500 font-medium">Total Revenue</p>
            <p className="md:text-[2vw] text-2xl font-bold mt-[0.5vw]">৳6.5Cr</p>
            <p className="md:text-[0.9vw] text-sm text-green-600 flex items-center mt-[0.3vw]">
              <TbCurrencyTaka className="text-[1vw] mr-[0.3vw]" />
              +8.2% from last year
            </p>
          </div>
          <TbCurrencyTaka className="text-gray-400 md:text-[1.5vw] text-2xl" />
        </div>
      </div>
    </div>
    <div className='px-[2vw] md:w-[85vw]  mx-auto md:flex gap-[1vw]'>
        <img src="/images/chart.png" className='md:w-[50vw]' alt="" />
        <Calendar />
    </div>
    <div className='px-[2vw] md:w-[85vw]  mx-auto md:flex gap-[1vw]'>
        <InstitutionOverview />

        <div className='md:w-[50%] md:h-[45vh] shadow-2xl rounded-2xl mt-[1vh]'>
                <div className='p-[2vw] '>
                    <h1 className='md:text-[1.5vw] text-2xl font-bold'>Student Pi Chart</h1>
                    <p>September 2025</p>
                    <div className='flex justify-center mt-[2vh]'>
                        <img src="/images/PieChart.png" className='w-[70%]' alt="" />
                    </div>
                  
                </div>
        </div>
    </div>
            
    </div>
  );
};

export default DashboardOverview;