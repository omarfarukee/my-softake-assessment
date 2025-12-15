/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar2 from './Navbar2';

const heroes = [
    { id: 1, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"I can call in a favor and send people who aren’t from this planet.", title: 'Captain Shield', image: '/images/1.png' },
    { id: 2, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"I punched out Adolf Hitler 200 times.", title: 'Thunder Bolt', image: '/images/2.png' },
    { id: 3, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"Give me a scotch. I’m starving.", title: 'Rocket Man', image: '/images/3.png' },
    { id: 4, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"I can call in a favor and send people who aren’t from this planet.", title: 'Star Light', image: '/images/4.png' },
    { id: 5, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"I punched out Adolf Hitler 200 times.", title: 'Love Guardian', image: '/images/5.png' },
    { id: 6, des: "We are  here to fight for truth, and justice!   We find the solution  at our own  way.", des2:"Give me a scotch. I’m starving.", title: 'Love Guardian', image: '/images/6.png' },
];

export default function HeroSection2() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [radiusPx, setRadiusPx] = useState(0);

    console.log(activeIndex)

    // ✅ Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // ✅ Convert vw → px (responsive)
useEffect(() => {
  const updateRadius = () => {
    const vw = window.innerWidth / 100;

    // Mobile breakpoint (Tailwind md = 768px)
    if (window.innerWidth < 768) {
      setRadiusPx(40 * vw); // MOBILE
    } else {
      setRadiusPx(25 * vw); // DESKTOP
    }
  };

  updateRadius();
  window.addEventListener("resize", updateRadius);

  return () => window.removeEventListener("resize", updateRadius);
}, []);


    const getPosition = (index: number) => {
        const total = heroes.length;
        const adjustedIndex = (index - activeIndex + total) % total;
        const angle = (adjustedIndex * 360) / total;

        const x = Math.cos((angle - 90) * (Math.PI / 180)) * radiusPx;
        const y = Math.sin((angle - 90) * (Math.PI / 180)) * radiusPx;

        return { x, y, isActive: adjustedIndex === 0 };
    };

    return (
        <div className="relative min-h-screen bg-linear-to-br from-slate-50 to-slate-100 overflow-hidden border">
            <div className='absolute w-full z-999'>
                <Navbar2 />
            </div>



            <div className="relative">

                {/* context */}
                <div className="md:w-[40vw] md:h-[60vh] w-full absolute  md:top-[25vh]  top-[10vh] left-[5vw] md:flex pt-[5vh] flex-col gap-[2vw]">
                    <h1 className='md:text-[3vw] font-bold text-4xl w-[90%]'>Our Supper Heroes</h1>
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={heroes[activeIndex].title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="md:text-[2vw] text-xl font-bold h-[12vh] mt-5 lg:mt-0 w-[90%] md:w-full"
                        >
                            {heroes[activeIndex].des2}
                        </motion.h1>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={heroes[activeIndex].des}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="md:text-[1.1vw] text-slate-600 md:max-w-[32vw] md:mt-[5vh] w-[90%] font-bold"
                        >
                            &quot;{heroes[activeIndex].des}&quot;
                        </motion.p>
                    </AnimatePresence>
                </div>

                <div className="absolute md:block hidden bg-[#d9d9d9] h-[60vw] w-[60vw] rounded-full right-[-30vw] top-[30vh]" />
                <div className='flex md:hidden  justify-center h-[75vw] w-full relative'>
                     <div className="absolute bg-[#d9d9d9] h-full w-[75vw] rounded-full top-[60vh]" />
                </div>
               

                <div className="absolute md:h-screen  md:w-[50vw] w-full flex items-center justify-center md:top-[32vh] top-[80vh] md:right-[-21.5vw]">
                    <div className="absolute">
                        <AnimatePresence>
                            {heroes.map((hero, index) => {
                                const { x, y, isActive } = getPosition(index);

                                return (
                                    <motion.div
                                        key={hero.id}
                                        animate={{
                                            x,
                                            y,
                                            zIndex: isActive ? 50 : 10,
                                            scale: isActive ? 1.05 : 1,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 60,
                                            damping: 18,
                                            duration: 1,
                                        }}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <div className="relative  md:w-[12vw] w-[20vw] h-[44vh] flex items-center justify-center">
                                            <img
                                                src={hero.image}
                                                alt=""
                                                className="h-full object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                        <div className="absolute -bottom-[5vh]  -translate-x-1/2 flex flex-col md:gap-[1vw] gap-3 md:items-end items-center">
                            {heroes.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`md:w-[0.5vw] cursor-pointer w-4 h-1 md:h-[0.4vw] rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-[#83cd20] md:w-[3vw] w-8'
                                        : 'bg-[#496328a9]'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
