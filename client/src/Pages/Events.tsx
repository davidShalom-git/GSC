
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import fggs from '../assets/FGGS.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'


const Events = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-linear-to-br from-gray-50 to-orange-50 shadow-xl'
                : 'bg-linear-to-br from-gray-50 to-orange-50 shadow-lg'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">


                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="relative p-2.5 rounded-2xl transition-all duration-300 bg-linear-to-br from-orange-400 to-red-500">
                                <div className="text-2xl"><img src={fggs} alt="FGGS Logo" className="h-6 w-6" /></div>
                                <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-wide text-gray-800">
                                    FGGS
                                </span>
                                <span className="text-xs font-semibold tracking-widest text-orange-500">
                                    CHURCH
                                </span>
                            </div>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                                >
                                    <span className="flex items-center gap-2">

                                        <span>{item.name}</span>
                                    </span>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 bg-orange-500"></div>
                                </motion.a>
                            ))}
                        </div>


                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:block px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 bg-linear-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105"
                        >
                            Join Us
                        </motion.button>


                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl transition-all duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="4" y1="8" x2="20" y2="8" />
                                        <line x1="4" y1="16" x2="20" y2="16" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>


               <AnimatePresence>
    {isMenuOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
        >
            <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl font-medium transition-all duration-300 text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                >
                    <button className="w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-linear-to-r from-orange-500 to-red-500 text-white hover:shadow-lg">
                        Join Us
                    </button>
                </motion.div>
            </div>
        </motion.div>
    )}
</AnimatePresence>
            </nav>

            <div className='bg-linear-to-b from-white to-gray-50 py-16 mt-28'>
                <div className='flex justify-center px-6 md:px-16 lg:px-24 xl:px-32'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block'>
                            Events 🙌🎆
                            <span className='absolute left-0 right-0 -bottom-3 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent'></span>
                        </h1>
                        <p className='text-gray-600 mt-6 text-sm md:text-base max-w-2xl mx-auto'>
                            Join us for our upcoming events filled with worship, fellowship, and spiritual growth. Stay tuned for more details!
                        </p>
                    </div>
                </div>
            </div>

          


            <div className='bg-linear-to-br from-gray-50 via-white to-orange-50 py-12'>
                <div className='max-w-6xl mx-auto px-4 space-y-12'>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='w-full relative group'
                    >
                        <Link to='/easter' className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <img
                                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Fasting Prayer"
                                className='w-full h-87.5 md:h-100 object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>


                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className='absolute inset-0 flex flex-col items-center justify-center px-6'
                            >
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className='text-3xl md:text-5xl font-bold text-white text-center drop-shadow-2xl mb-4'
                                >
                                    Easter Service
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className='w-24 h-1 bg-orange-500 rounded-full'
                                ></motion.div>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className='absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className='absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                                className='absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className='absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60'
                            ></motion.div>
                        </Link>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='w-full relative group'
                    >
                        <Link to='/christmas' className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <img
                                src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Worship Service"
                                className='w-full h-87.5 md:h-100 object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>


                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className='absolute inset-0 flex flex-col items-center justify-center px-6'
                            >
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className='text-3xl md:text-5xl font-bold text-white text-center drop-shadow-2xl mb-4'
                                >
                                    Christmas Prayer Service
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className='w-24 h-1 bg-orange-500 rounded-full'
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className='absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className='absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                                className='absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className='absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60'
                            ></motion.div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='w-full relative group'
                    >
                        <Link to='/newyear' className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <img
                                src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Worship Service"
                                className='w-full h-87.5 md:h-100 object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>


                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className='absolute inset-0 flex flex-col items-center justify-center px-6'
                            >
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className='text-3xl md:text-5xl font-bold text-white text-center drop-shadow-2xl mb-4'
                                >
                                    New Year Prayer Service
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className='w-24 h-1 bg-orange-500 rounded-full'
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className='absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className='absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                                className='absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className='absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60'
                            ></motion.div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='w-full relative group'
                    >
                        <Link to='/good' className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <img
                                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Worship Service"
                                className='w-full h-87.5 md:h-100 object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent'></div>


                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className='absolute inset-0 flex flex-col items-center justify-center px-6'
                            >
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className='text-3xl md:text-5xl font-bold text-white text-center drop-shadow-2xl mb-4'
                                >
                                    Good Friday Service
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className='w-24 h-1 bg-orange-500 rounded-full'
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className='absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className='absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                                className='absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/60'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                                className='absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60'
                            ></motion.div>
                        </Link>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Events