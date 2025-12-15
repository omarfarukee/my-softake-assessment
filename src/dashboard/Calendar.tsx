'use client';

import { useState, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayIndex = firstDay.getDay();

    const daysArray: (number | null)[] = [];

    for (let i = 0; i < startDayIndex; i++) daysArray.push(null);
    for (let day = 1; day <= daysInMonth; day++) daysArray.push(day);

    return daysArray;
  }, [currentDate]);

  const monthYear = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(currentDate);

  const handlePrevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const handleNextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const isHighlighted = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm md:h-[46vh] w-full md:w-[40vw] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 md:px-[2vw] pt-3 pb-2 flex items-center justify-between">
        <h2 className="text-sm md:text-[1vw] font-medium text-gray-600">{monthYear}</h2>
        <div className="flex space-x-2 md:space-x-[0.8vw]">
          <button onClick={handlePrevMonth} className="p-2 md:p-[0.5vw] text-gray-500 hover:text-gray-700">
            <FaChevronLeft />
          </button>
          <button onClick={handleNextMonth} className="p-2 md:p-[0.5vw] text-gray-500 hover:text-gray-700">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="px-4 md:px-[2vw] grid grid-cols-7 gap-1 md:gap-[0.5vw] mb-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center text-xs md:text-[0.8vw] text-gray-500 font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grow px-4 md:px-[2vw] pb-2">
        <div className="grid grid-cols-7 gap-1 md:gap-[0.5vw]">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex items-center justify-center text-xs md:text-[0.9vw] 
              h-[3.5vw] md:h-[2.8vw] w-[3.5vw] md:w-[2.8vw] rounded-full cursor-pointer
              ${isHighlighted(day)
                ? 'bg-blue-500 text-white'
                : day
                ? 'text-gray-600 hover:bg-gray-50'
                : 'text-transparent pointer-events-none'}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
