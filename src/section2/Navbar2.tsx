/* eslint-disable @next/next/no-img-element */
'use client';

import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Navbar2 = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsHomeHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="px-[5vw] pt-[2vh] flex items-center justify-between relative">
  
        <div className="flex items-center">
          <img src="/images/logo.jpeg" className="md:w-[2vw] object-cover" alt="Logo" />
          <span className="text-green-800 font-bold md:text-[2vw]">
            Supper Heroes
          </span>
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-[1vw] text-green-800 font-medium">

          <div
            className="relative"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
            ref={dropdownRef}
          >
            <Link
              href="/"
              className="hover:text-green-600 duration-300 font-bold flex items-center"
              style={{ fontSize: '1vw' }}
            >
              Hero Section list <RiArrowDropDownLine className="ml-1 text-[1vw]" />
            </Link>

            <AnimatePresence>
              {isHomeHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-[0.5vw] w-[12vw] bg-white shadow-lg rounded-md py-[0.5vw] z-50"
                >
                  <Link
                    href="/"
                    className="block px-[1vw] py-[0.6vw] hover:bg-green-50"
                    style={{ fontSize: '0.85vw' }}
                  >
                    Hero Section 1
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-[1vw] py-[0.6vw] hover:bg-green-50"
                    style={{ fontSize: '0.85vw' }}
                  >
                    Dashboard Design
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {['ABOUT US', 'SERVICES', 'PROJECTS', 'BLOG', 'PAGE', 'CONTACT'].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-green-600 font-bold flex items-center"
              style={{ fontSize: '0.9vw' }}
            >
              {item} <RiArrowDropDownLine className="ml-1 text-[1vw]" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:flex bg-[#83cd20] text-white rounded-full items-center gap-[1vw]"
          style={{ fontSize: '0.8vw', padding: '0.8vw 1vw' }}>
          Get An Appointment <FaArrowRight />
        </button>

        <button
          className="md:hidden text-green-800 text-[6vw]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 left-0 h-full w-[75vw] bg-white z-50 p-[5vw]"
            >
              {/* Close */}
              <button
                className="absolute top-[4vw] right-[4vw] text-[5vw]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Menu */}
              <div className="mt-[10vh] space-y-[4vw] text-green-800 font-semibold text-[4vw]">

                {/* Mobile submenu */}
                <div>
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  >
                    Hero Section list
                    <RiArrowDropDownLine
                      className={`text-[6vw] transition-transform ${
                        mobileSubmenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileSubmenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-[4vw] mt-[2vw] flex flex-col space-y-[2vw]"
                      >
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                          Hero Section 1
                        </Link>
                        <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                          Dashboard Design
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-5'>
                  {['ABOUT US', 'SERVICES', 'PROJECTS', 'BLOG', 'PAGE', 'CONTACT'].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}
                </div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2;
