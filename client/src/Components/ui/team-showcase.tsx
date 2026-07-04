import { Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'David Shalom',
    role: 'LEAD PASTOR',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'WORSHIP LEADER',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    social: { instagram: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: "Michael O'Connor",
    role: 'YOUTH PASTOR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Emily Davis',
    role: 'COMMUNITY DIRECTOR',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'James Wilson',
    role: 'MEDIA DIRECTOR',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    social: { twitter: '#', linkedin: '#', behance: '#' },
  },
  {
    id: '6',
    name: 'Rachel Torres',
    role: 'PRAYER COORDINATOR',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    social: { instagram: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 w-full max-w-5xl mx-auto pb-16 justify-items-center">
      {members.map((member) => (
        <div 
          key={member.id}
          className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-xl w-full max-w-[280px]"
        >
          {/* Image */}
          <img 
            src={member.image} 
            alt={member.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-[#022c22]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 z-20">
            <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#d4af37] text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-2">
                {member.role}
              </p>
              <h3 className="font-serif text-lg sm:text-2xl text-white mb-2 sm:mb-4">
                {member.name}
              </h3>
              
              <div className="w-12 h-[1px] bg-[#d4af37] mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                {member.social?.twitter && (
                  <a href={member.social.twitter} className="text-white hover:text-[#d4af37] transition-colors"><Twitter size={18} /></a>
                )}
                {member.social?.linkedin && (
                  <a href={member.social.linkedin} className="text-white hover:text-[#d4af37] transition-colors"><Linkedin size={18} /></a>
                )}
                {member.social?.instagram && (
                  <a href={member.social.instagram} className="text-white hover:text-[#d4af37] transition-colors"><Instagram size={18} /></a>
                )}
                {member.social?.behance && (
                  <a href={member.social.behance} className="text-white hover:text-[#d4af37] transition-colors"><Globe size={18} /></a>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative Frame */}
          <div className="absolute inset-4 border border-white/20 rounded-xl z-10 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-[0.97] pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
