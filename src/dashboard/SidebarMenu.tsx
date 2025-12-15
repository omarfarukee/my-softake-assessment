'use client';

import { FaHome, FaBuilding, FaUserTie, FaGraduationCap, FaUsers, FaMapMarkerAlt, FaFileAlt, FaChartLine, FaCog, FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';

const SidebarMenu = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); 

  const menuItems = [
    { label: 'Overview', icon: FaHome, key: 'Overview' },
    { label: 'Institutions', icon: FaBuilding, key: 'Institutions' },
    { label: 'Teacher', icon: FaUserTie, key: 'Teacher' },
    { label: 'Student', icon: FaGraduationCap, key: 'Student' },
    { label: 'Staff', icon: FaUsers, key: 'Staff' },
    { label: 'Facilities', icon: FaMapMarkerAlt, key: 'Facilities' },
    { label: 'Reports', icon: FaFileAlt, key: 'Reports' },
    { label: 'Analytics', icon: FaChartLine, key: 'Analytics' },
    { label: 'Settings', icon: FaCog, key: 'Settings' },
    { label: 'Fees management', icon: FaMoneyBillWave, key: 'Fees management' },
  ];

  return (
    <div className="p-[2vw] text-[0.8vw] font-semibold">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.key;

        return (
          <div
            key={item.key}
            className={`flex items-center md:text-[0.8vw] text-[15px] md:space-x-[0.8vw] space-x-[2vw] cursor-pointer p-[0.6vw] rounded-md transition-colors ${
              isActive ? 'bg-blue-50 text-blue-600' : 'hover:text-blue-600'
            }`}
            onClick={() => setActiveItem(item.key)}
            
          >
            <Icon className={`md:text-[1.2vw] ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;