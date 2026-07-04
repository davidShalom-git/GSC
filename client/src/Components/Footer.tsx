"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Prayer", href: "/prayer" },
        { label: "Events", href: "/events" },
        { label: "Worship", href: "/services" },
        { label: "About", href: "/about" },
      ],
    }
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#d4af37]" />,
      text: "holystyle09@gmail.com",
      href: "mailto:holystyle09@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#d4af37]" />,
      text: "8618515965",
      href: "tel:8618515965",
    },
    {
      icon: <MapPin size={18} className="text-[#d4af37]" />,
      text: "Kilnathur, Tiruvannamalai",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com/your-church" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/your-church" },
    { icon: <Youtube size={20} />, label: "Youtube", href: "https://youtube.com/@your-church" },
    { icon: <Globe size={20} />, label: "Website", href: "/" },
  ];

  return (
    <footer className="bg-[#022c22] relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 md:p-14 z-50 relative pointer-events-none [&>*]:pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl font-serif font-bold tracking-widest">FGGS</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 font-light">
              சுவிசேஷத்தை பரப்புதல், மற்றும் ஆவியானவரால் நிரப்பப்பட்ட கூட்டங்களில் ஒன்றுசேர்தல். விசுவாசத்திலும் அன்பிலும் வளர எங்களுடன் இணையுங்கள்.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#d4af37] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white/70">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#d4af37] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#d4af37] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-white/50">
          {/* Social icons */}
          <div className="flex space-x-6 text-white/40">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#d4af37] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} FGGS. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="flex h-[20rem] md:h-[30rem] -mt-24 md:-mt-52 -mb-16 md:-mb-36">
        <TextHoverEffect text="FGGS" className="z-0" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;