 <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 z-10"
                    >
                        <div className="inline-block">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-200"
                            >
                                <BiShield className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-700">
                                    Supper Heroes
                                </span>
                            </motion.div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                            Our Supper
                            <br />
                            <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                                Heroes
                            </span>
                        </h1>

                        <div className="space-y-6">
                            <motion.blockquote
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="border-l-4 border-slate-300 pl-6"
                            >
                                <p className="text-lg text-slate-700 font-medium">
                                    I punched out Adolf Hitler 200 times.
                                </p>
                            </motion.blockquote>

                            <motion.blockquote
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="border-l-4 border-blue-500 pl-6"
                            >
                                <p className="text-lg text-slate-700 font-medium">
                                    We are here to fight for truth, and justice! We find the
                                    solution at our own way.
                                </p>
                            </motion.blockquote>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                                Meet Our Heroes
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-slate-200">
                                Learn More
                            </button>
                        </motion.div>
                    </motion.div>


                    ====
                     <div className="absolute -bottom-10  -translate-x-1/2 flex gap-2">
                                {heroes.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? 'bg-blue-600 w-8'
                                                : 'bg-slate-300 hover:bg-slate-400'
                                            }`}
                                    />
                                ))}
                            </div>