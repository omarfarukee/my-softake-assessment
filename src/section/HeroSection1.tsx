'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronLeft, BiChevronRight, BiMenu } from 'react-icons/bi';
import { SlSocialFacebook } from 'react-icons/sl';
import { CiTwitter } from 'react-icons/ci';
import { PiInstagramLogoLight } from 'react-icons/pi';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/images/pic1.jpeg',
    title: 'Take Your Snow Days to the Next Level',
    description:
      'Unlock a wealth of detailed stats (and bragging rights) about your days skiing and snowboarding. Know what to expect with condition reports and trail maps for resorts around the world.',
  },
  {
    id: 2,
    image: '/images/pic2.jpeg',
    title: 'Make Every Run on the Mountain Count',
    description:
      'Every day on the mountain tells a story—capture yours with detailed run tracking, performance stats, and global resort insights that keep you prepared for whatever the slopes bring.',
  },
  {
    id: 3,
    image: '/images/pic3.jpeg',
    title: 'Transform Your Time in the Snow Into Something Extraordinary',
    description:
      'Ride smarter, push harder, and celebrate every milestone with powerful performance insights, live condition updates, and detailed trail maps that bring every resort within reach.',
  },
  {
    id: 4,
    image: '/images/pic4.jpeg',
    title: 'Transform Your Time in the Snow Into Something Extraordinary',
    description:
      'Ride smarter, push harder, and celebrate every milestone with powerful performance insights, live condition updates, and detailed trail maps that bring every resort within reach.',
  },
  {
    id: 5,
    image: '/images/pic5.jpeg',
    title: 'Transform Your Time in the Snow Into Something Extraordinary',
    description:
      'Ride smarter, push harder, and celebrate every milestone with powerful performance insights, live condition updates, and detailed trail maps that bring every resort within reach.',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const next1 = (currentSlide + 1) % slides.length;
  const next2 = (currentSlide + 2) % slides.length;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between md:px-[4vw] md:py-[1.5vw] px-2 py-5">
        <button className="text-white md:p-[0.5vw] rounded-[0.5vw] hover:bg-white/10">
          <BiMenu className="md:text-[1.5vw] text-3xl" />
        </button>
        <div className="flex gap-[2vw] md:text-[0.9vw] text-[10px] md:mr-[7vw]">
          <div className='text-white border px-[1vw] py-[0.1vw] rounded-2xl border-white hover:bg-white/20 duration-300'>
            <Link href="/heroSectionTwo">Hero Section 2</Link>
          </div>
          <div className='text-white border px-[1vw] py-[0.1vw] rounded-2xl border-white hover:bg-white/20 duration-300'>
            <Link href="/dashboard">Dashboard Design</Link>
          </div>
          <div className='md:flex gap-[1vw] hidden'>
            {['About', 'Features', 'Contact', 'Gallery', 'Team'].map((item) => (
            <a key={item} href="#" className="text-white hover:text-white/80">
              {item}
            </a>
          ))}
          
          </div>
          
        </div>
      </nav>

      {/* Content */}
      <div className="absolute inset-0 z-30 md:flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="md:w-[55%]   px-[6vw]  md:mb-[24vh] mt-[30%] md:mt-0  pl-[6vw]"
          >
            <h1 className="md:text-[2.5vw] text-2xl font-bold text-white mb-[2vw] leading-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="md:text-[clamp(1vw,1.1vw,1.3vw)] text-sm text-white/90 mb-[3vw] md:max-w-[35vw]">
              {slides[currentSlide].description}
            </p>

            <button className="md:px-[3vw] md:py-[1vw] px-2 py-2 ml-[5%] mt-[5%] border-[0.15vw] border-[#3a8dcc] rounded-full md:text-[0.9vw] text-white hover:bg-white hover:text-black transition-all duration-300">
              GET STARTED
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Preview Cards */}
        <div className="md:w-[45%]  flex justify-end pr-[1vw] md:mt-[30vh] mt-[20%] ">
          <div className="flex gap-[1.5vw]">
            {[next1, next2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative md:w-[23vw] w-37.5 md:h-[30vh] h-25 rounded-[0.5vw] overflow-hidden shadow-2xl"
              >
                <Image
                  src={slides[index].image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <div className="absolute md:bottom-[4vh] bottom-[10%] left-0 right-0 z-50 flex md:justify-between justify-center items-center px-[2vw] py-[2vw]">
        <div className="md:flex gap-[1.2vw] ml-[3vw] hidden">
          <SlSocialFacebook className="text-[1.4vw] text-white/70 hover:text-white duration-300 cursor-pointer" />
          <CiTwitter  className="text-[1.4vw] text-white/70 hover:text-white duration-300 cursor-pointer" />
          <PiInstagramLogoLight className="text-[1.4vw] text-white/70 hover:text-white duration-300 cursor-pointer" />
        </div>

        <div className="flex items-center gap-[1.5vw]">
          <button
            onClick={prevSlide}
            className="md:w-[3vw] md:h-[3vw] w-10 h-10 rounded-full border border-white/50 flex items-center bg-white/10 backdrop-blur-sm justify-center cursor-pointer"
          >
            <BiChevronLeft className="md:text-[2vw]  text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="md:w-[3vw] md:h-[3vw] w-10 h-10 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer"
          >
            <BiChevronRight className="md:text-[2vw] text-white" />
          </button>

          <div className="flex items-center gap-[1vw]">
            <div className="md:w-[41vw] w-[55vw] h-[0.18vw] bg-white/30">
              <div
                className="h-full bg-[#f6c236] transition-all duration-500"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-white md:text-[1vw] text-2xl font-semibold">
              0{currentSlide + 1}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
