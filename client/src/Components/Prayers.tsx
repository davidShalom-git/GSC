import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Prayers = () => {
    return (
        <>
          <div className='text-center mb-12 px-6'>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-5xl mb-3"
          >
            ✨
          </motion.div>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-black mb-3'>
            Prayer
          </h1>
          <div className='w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full'></div>
        </div>


            {/* Sunday Service */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}

                className='flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-gray-100 py-16'>
                <div className='flex-1 space-y-8'>
                    <div className='inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200'>
                        <Clock className='w-5 h-5 text-orange-500' />
                        <span className='font-semibold text-gray-800 text-lg'>Morning 10:00 - 12:00</span>
                    </div>

                    <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Join Us for Worship</h2>
                        <p className='text-gray-600 text-lg leading-relaxed text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in eligendi debitis, nemo labore, optio cupiditate nobis hic tempore atque obcaecati dignissimos magni eveniet. Libero error fugiat quisquam natus soluta dignissimos molestias repudiandae alias!
                        </p>

                        <div className='mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Location</h3>
                                    <p className='text-gray-600 text-sm'>Kilnathur, Tiruvannamalai</p>
                                    <button className='mt-6 mx-auto bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300'>
                                        <Link to='/service'>Live</Link>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Every Sunday</h3>
                                    <p className='text-gray-600 text-sm'>All are welcome</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex-1 w-full relative group'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                            alt="Sunday Service"
                            className='w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-6'>
                            <h1 className='text-5xl md:text-6xl font-bold text-white text-center drop-shadow-2xl mb-4'>
                                Sunday Service
                            </h1>
                            <div className='w-24 h-1 bg-orange-500 rounded-full'></div>
                        </div>
                        <div className='absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/50 rounded-tl-xl'></div>
                        <div className='absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/50 rounded-br-xl'></div>
                    </div>
                </div>
            </motion.div>

            {/* Fasting Prayer */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}

                className='flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-24 xl:px-32  bg-gradient-to-br from-gray-50 to-gray-100 py-16'>
                <div className='flex-1 w-full relative group'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                            alt="Fasting Prayer"
                            className='w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-6'>
                            <h1 className='text-5xl md:text-6xl font-bold text-white text-center drop-shadow-2xl mb-4'>
                                Fasting Prayer
                            </h1>
                            <div className='w-24 h-1 bg-orange-500 rounded-full'></div>
                        </div>
                        <div className='absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/50 rounded-tl-xl'></div>
                        <div className='absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/50 rounded-br-xl'></div>
                    </div>
                </div>

                <div className='flex-1 space-y-8'>
                    <div className='inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200'>
                        <Clock className='w-5 h-5 text-orange-500' />
                        <span className='font-semibold text-gray-800 text-lg'>Morning 10:00 - 12:00</span>
                    </div>

                    <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Join Us for Worship</h2>
                        <p className='text-gray-600 text-lg leading-relaxed text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in eligendi debitis, nemo labore, optio cupiditate nobis hic tempore atque obcaecati dignissimos magni eveniet.
                        </p>

                        <div className='mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Location</h3>
                                    <p className='text-gray-600 text-sm'>Kilnathur, Tiruvannamalai</p>
                                      <button className='mt-6 mx-auto bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300'>
                                        <Link to='/service'>Live</Link>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Every Saturday</h3>
                                    <p className='text-gray-600 text-sm'>All are welcome</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Anointing Prayer */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}

                className='flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-gray-50 to-gray-100 py-16'>
                <div className='flex-1 space-y-8'>
                    <div className='inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200'>
                        <Clock className='w-5 h-5 text-orange-500' />
                        <span className='font-semibold text-gray-800 text-lg'>Evening 6:00 - 7:00</span>
                    </div>

                    <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Join Us for Worship</h2>
                        <p className='text-gray-600 text-lg leading-relaxed text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in eligendi debitis, nemo labore, optio cupiditate nobis hic tempore atque obcaecati dignissimos magni eveniet.
                        </p>

                        <div className='mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Location</h3>
                                    <p className='text-gray-600 text-sm'>Kilnathur, Tiruvannamalai</p>
                                      <button className='mt-6 mx-auto bg-red-600 text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300'>
                                        <Link to='/service'>Live</Link>
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-orange-500 rounded-full mt-2'></div>
                                <div>
                                    <h3 className='font-semibold text-gray-800'>Every Tuesday</h3>
                                    <p className='text-gray-600 text-sm'>All are welcome</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 w-full relative group'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                            alt="Anointing Prayer"
                            className='w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                        <div className='absolute inset-0 flex flex-col items-center justify-center px-6'>
                            <h1 className='text-5xl md:text-6xl font-bold text-white text-center drop-shadow-2xl mb-4'>
                                Anointing Prayer
                            </h1>
                            <div className='w-24 h-1 bg-orange-500 rounded-full'></div>
                        </div>
                        <div className='absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/50 rounded-tl-xl'></div>
                        <div className='absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/50 rounded-br-xl'></div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Prayers