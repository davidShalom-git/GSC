import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import fggs from '../assets/FGGS.png'
import Video from '../Components/Video'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Services = () => {
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
                ? 'bg-linear-to-br from-gray-50 to-orange-50 shadow-xl '
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
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`group relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isScrolled
                                            ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                                            : 'text-white hover:bg-white/20'
                                            }`}
                                    >
                                        {item.name}
                                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${isScrolled ? 'bg-orange-500' : 'bg-white'
                                            }`}></div>
                                    </Link>
                                </motion.div>
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
                            className="md:hidden overflow-hidden border-t border-gray-200"
                        >
                            <div className="px-4 py-4 bg-white">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition-all duration-300 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                    >

                                        <span className="font-medium">{item.name}</span>
                                    </motion.a>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full mt-2 px-5 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    Join Us
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <div className='bg-linear-to-br from-gray-50 to-orange-50 py-16 mt-28'>
                <div className='flex justify-center px-6 md:px-16 lg:px-24 xl:px-32'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block'>
                            Prayers 🙏
                            <span className='absolute left-0 right-0 -bottom-3 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent'></span>
                        </h1>
                        <p className='text-gray-600 mt-6 text-sm md:text-base max-w-2xl mx-auto'>
                            Join us in lifting our hearts and voices to God
                        </p>
                    </div>
                </div>
            </div>

            <Video />
            <Footer />

        </>
    )
}

export default Services