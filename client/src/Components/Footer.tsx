
import fggs from '../assets/FGGS.png'
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-br from-gray-50 to-orange-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                    <img src={fggs} alt="FGGS Logo" className="h-10 md:h-12 lg:h-14" />
                    <span className="font-bold text-2xl md:text-3xl">FGGS</span>
                </div>


                <p className="text-center max-w-3xl mx-auto text-lg md:text-xl font-light text-gray-900 italic leading-relaxed mb-6">
                    சுவிசேஷத்தை பரப்புதல், மற்றும் ஆவியானவரால் நிரப்பப்பட்ட கூட்டங்களில் ஒன்றுசேர்தல். விசுவாசத்திலும் அன்பிலும் வளர எங்களுடன் இணையுங்கள்.
                </p>


                <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>

                <div className="flex justify-center items-center gap-6 mb-8">
                    <a
                        href="https://facebook.com/your-church"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com/your-church"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-pink-600 hover:bg-linear-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://youtube.com/@your-church"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <Youtube className="w-6 h-6" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700">
                    <a
                        href="mailto:contact@fggs.com"
                        className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span>contact@fggs.com</span>
                    </a>
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span>+91 98765 43210</span>
                    </a>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
                    <a href="/" className="hover:text-gray-900 transition-colors">FGGS</a> @{new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer