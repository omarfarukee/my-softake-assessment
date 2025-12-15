'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">

      {/* Decorative blurred blobs */}
      <div className="absolute -top-40 -left-40 w-120 h-120 bg-blue-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-green-200 rounded-full blur-3xl opacity-40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl px-10 py-12 text-center max-w-lg w-full"
      >
        {/* 404 */}
        <h1 className="text-[6rem] font-extrabold bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent leading-none">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            <FaHome />
            Go Home
          </Link>

          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
