
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, MapPin, Calendar, Users } from 'lucide-react';
import Section from './components/Section';
import { CustomForm } from './components/Forms';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import { TRANSLATIONS, BotanicalDivider, Monogram } from './constants';
import { Language } from './types';

// Custom Dress Icon SVG
const DressIcon = ({ size = 32, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C9 2 7 4 7 7C7 9 8 11 9 12L5 22H19L15 12C16 11 17 9 17 7C17 4 15 2 12 2Z" />
    <path d="M9 12C9 12 10.5 13 12 13C13.5 13 15 12 15 12" />
    <path d="M7 7C7 7 9.5 8 12 8C14.5 8 17 7 17 7" />
  </svg>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const storyScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1.05]);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.story, href: '#story' },
    { name: t.nav.witnesses, href: '#witnesses' },
    { name: t.nav.moments, href: '#gallery' },
    { name: t.nav.bigDay, href: '#big-day' },
    { name: t.nav.schedule, href: '#schedule' },
    { name: t.nav.rsvp, href: '#rsvp' },
    { name: t.nav.music, href: '#music' },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-sage/20 paper-texture relative bg-[#FDFBF7]">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-5' : 'bg-transparent py-12'}`}>
        <nav className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <button onClick={() => scrollTo('#hero')} className="group flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-serif tracking-widest text-sage transition-colors group-hover:text-[#4a5845] uppercase font-light">A & J</span>
            <div className={`h-[1px] bg-sage/30 transition-all duration-500 ${scrolled ? 'w-0' : 'w-full mt-1'}`}></div>
          </button>
          
          <div className="flex items-center">
            <ul className="hidden xl:flex space-x-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollTo(link.href)} className="text-[10px] uppercase tracking-[0.45em] font-black text-[#666] hover:text-sage transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-sage hover:after:w-full after:transition-all">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 text-[11px] font-black tracking-[0.2em] uppercase ml-10 border-l border-sage/10 pl-10">
              <button onClick={() => setLang('en')} className={`transition-all ${lang === 'en' ? 'text-sage scale-110' : 'text-gray-300'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`transition-all ${lang === 'fr' ? 'text-sage scale-110' : 'text-gray-300'}`}>FR</button>
            </div>
            <button className="xl:hidden text-sage ml-8 p-2 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-10 pt-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="z-10 flex flex-col items-center max-w-6xl mt-20"
        >
          <Monogram className="mb-12" />
          
          <div className="relative mb-12 flex flex-col items-center">
             <h1 className="flex flex-col md:flex-row items-center justify-center">
                <span className="text-8xl md:text-[10rem] font-serif text-[#73866C] leading-none tracking-tight font-light">Adele</span> 
                <span className="font-script text-6xl md:text-8xl text-gold mx-8 italic opacity-60 font-light">&</span> 
                <span className="text-8xl md:text-[10rem] font-serif text-[#73866C] leading-none tracking-tight font-light">Joel</span>
             </h1>
          </div>

          <div className="flex items-center space-x-8 mb-16 text-3xl font-serif text-[#888] font-light">
             <span>9</span><span className="text-gold/30">|</span><span>18</span><span className="text-gold/30">|</span><span>2026</span>
          </div>

          <p className="text-[11px] md:text-xs uppercase tracking-[0.65em] text-[#444] mb-24 font-black opacity-60 max-w-lg leading-relaxed">
            {t.hero.subheading}
          </p>

          <Countdown lang={lang} />

          <button onClick={() => scrollTo('#rsvp')} className="mt-32 px-20 py-7 bg-sage text-white uppercase tracking-[0.55em] text-[10px] font-black hover:bg-[#5a6a54] transition-all transform hover:scale-105 shadow-2xl rounded-full">
            {t.hero.rsvpBtn}
          </button>
        </motion.div>
      </section>

      {/* Announcement */}
      <section id="announcement" className="relative py-56 px-10 md:px-20">
        <div className="max-w-5xl mx-auto text-center relative p-16 md:p-36 border border-sage/5 bg-white/40 backdrop-blur-md shadow-inner rounded-[6rem]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.4 }}>
            <p className="text-4xl md:text-7xl font-serif text-[#222] leading-[1.1] mb-16 italic font-light tracking-tight">
              Welcome!
            </p>
            <div className="w-24 h-[1px] bg-sage/20 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl font-serif text-[#555] leading-loose max-w-2xl mx-auto italic font-light">
              {t.announcement.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section id="story" title={t.story.title} subtitle={t.story.subtitle}>
        <div className="grid lg:grid-cols-12 gap-28 items-center">
          <div className="lg:col-span-5 space-y-14 order-2 lg:order-1">
            <p className="text-3xl md:text-4xl font-serif leading-relaxed text-[#222] italic font-light">
              {t.story.text1}
            </p>
            <p className="text-[#555] text-xl leading-loose font-light opacity-90">
              {t.story.text2}
            </p>
            <div className="pt-12 flex items-center space-x-10">
               <div className="w-24 h-[1px] bg-sage/10"></div>
               <span className="font-script text-5xl text-sage italic opacity-70">Adele & Joel</span>
               <div className="w-24 h-[1px] bg-sage/10"></div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div style={{ scale: storyScale }} className="relative">
              <div className="aspect-[16/11] bg-white p-7 rounded-[3rem] shadow-2xl border border-sage/5 transform rotate-2">
                <img src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=1200&auto=format&fit=crop" 
                     alt="Adele and Joel" className="w-full h-full object-cover rounded-[2rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Witnesses Section */}
      <Section id="witnesses" title={t.witnesses.title} subtitle={t.witnesses.subtitle} dark>
        <div className="grid md:grid-cols-2 gap-24 mt-16">
          <div className="space-y-12">
            <h3 className="text-xs uppercase tracking-[0.6em] font-black text-sage text-center mb-10 opacity-70 border-b border-sage/10 pb-4 inline-block mx-auto w-full">
              {t.witnesses.brideTitle}
            </h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="text-center group">
                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full mx-auto mb-6 border border-sage/5 shadow-sm p-2 transition-all group-hover:shadow-md">
                   <div className="w-full h-full rounded-full bg-sage/5 flex items-center justify-center text-sage/40">
                      <Users size={40} />
                   </div>
                </div>
                <p className="font-serif text-2xl italic text-[#333]">{t.witnesses.names.witness1}</p>
                <p className="text-[10px] uppercase tracking-widest text-sage font-bold mt-2">Témoin</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full mx-auto mb-6 border border-sage/5 shadow-sm p-2 transition-all group-hover:shadow-md">
                   <div className="w-full h-full rounded-full bg-sage/5 flex items-center justify-center text-sage/40">
                      <Users size={40} />
                   </div>
                </div>
                <p className="font-serif text-2xl italic text-[#333]">{t.witnesses.names.witness2}</p>
                <p className="text-[10px] uppercase tracking-widest text-sage font-bold mt-2">Témoin</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <h3 className="text-xs uppercase tracking-[0.6em] font-black text-sage text-center mb-10 opacity-70 border-b border-sage/10 pb-4 inline-block mx-auto w-full">
              {t.witnesses.groomTitle}
            </h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="text-center group">
                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full mx-auto mb-6 border border-sage/5 shadow-sm p-2 transition-all group-hover:shadow-md">
                   <div className="w-full h-full rounded-full bg-sage/5 flex items-center justify-center text-sage/40">
                      <Users size={40} />
                   </div>
                </div>
                <p className="font-serif text-2xl italic text-[#333]">{t.witnesses.names.witness3}</p>
                <p className="text-[10px] uppercase tracking-widest text-sage font-bold mt-2">Témoin</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full mx-auto mb-6 border border-sage/5 shadow-sm p-2 transition-all group-hover:shadow-md">
                   <div className="w-full h-full rounded-full bg-sage/5 flex items-center justify-center text-sage/40">
                      <Users size={40} />
                   </div>
                </div>
                <p className="font-serif text-2xl italic text-[#333]">{t.witnesses.names.witness4}</p>
                <p className="text-[10px] uppercase tracking-widest text-sage font-bold mt-2">Témoin</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Moments Gallery */}
      <Section id="gallery" title={t.gallery.title} subtitle={t.gallery.subtitle}>
        <Gallery />
      </Section>

      <BotanicalDivider />

      {/* The Big Day - 3 Box Layout */}
      <Section id="big-day" title={t.bigDay.title} dark>
        <div className="grid md:grid-cols-3 gap-14">
          {/* When */}
          <motion.div whileHover={{ y: -15 }} className="bg-white p-16 rounded-[4rem] shadow-sm border border-sage/5 text-center flex flex-col items-center group transition-all duration-700">
            <div className="mb-12 p-8 bg-sage/5 rounded-full text-sage group-hover:bg-sage/10 transition-colors"><Calendar size={40} /></div>
            <h3 className="text-xs uppercase tracking-[0.55em] font-black text-sage/60 mb-8">{t.bigDay.when}</h3>
            <p className="text-3xl font-serif text-[#111] leading-tight mb-4 font-light italic">{t.bigDay.date}</p>
            <p className="text-[11px] tracking-[0.35em] text-gold font-black mt-8 uppercase opacity-60">{t.bigDay.timeLabel}</p>
          </motion.div>

          {/* Where */}
          <motion.div whileHover={{ y: -15 }} className="bg-white p-16 rounded-[4rem] shadow-sm border border-sage/5 text-center flex flex-col items-center group transition-all duration-700">
            <div className="mb-12 p-8 bg-sage/5 rounded-full text-sage group-hover:bg-sage/10 transition-colors"><MapPin size={40} /></div>
            <h3 className="text-xs uppercase tracking-[0.55em] font-black text-sage/60 mb-8">{t.bigDay.where}</h3>
            <p className="text-3xl font-serif text-[#111] leading-tight mb-4 font-light italic">{t.bigDay.venue}</p>
            <p className="text-[11px] tracking-[0.35em] text-gold font-black mt-8 uppercase opacity-60">{t.bigDay.venueNote}</p>
          </motion.div>

          {/* Theme & Dress Code */}
          <motion.div whileHover={{ y: -15 }} className="bg-white p-16 rounded-[4rem] shadow-sm border border-sage/5 text-center flex flex-col items-center group transition-all duration-700">
            <div className="mb-12 p-8 bg-sage/5 rounded-full text-sage group-hover:bg-sage/10 transition-colors"><DressIcon size={40} /></div>
            <h3 className="text-xs uppercase tracking-[0.55em] font-black text-sage/60 mb-8">{t.bigDay.attire}</h3>
            <div className="space-y-5">
              <p className="text-3xl font-serif text-[#111] leading-tight italic font-light">{t.bigDay.themeLabel}</p>
              <p className="text-[14px] font-medium text-[#555] uppercase tracking-[0.25em]">{t.bigDay.dressCodeLabel}</p>
              <p className="text-[11px] tracking-[0.25em] text-sage font-black mt-10 uppercase opacity-80 leading-relaxed max-w-[220px] mx-auto">{t.bigDay.colorsLabel}</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Schedule */}
      <Section id="schedule" title={t.schedule.title} subtitle="The Choreography of Our Day.">
        <div className="max-w-5xl mx-auto">
          {t.schedule.items.map((item, i) => (
            <motion.div key={i} className="flex flex-col md:flex-row items-center gap-20 mb-36 last:mb-0 group">
              <div className={`flex-1 text-center md:text-right ${i % 2 !== 0 ? 'md:order-3 md:text-left' : ''}`}>
                <span className="text-[11px] uppercase tracking-[0.65em] text-gold font-black mb-5 block">{item.time}</span>
                <h3 className="text-6xl font-serif mb-8 group-hover:text-sage transition-colors font-light italic tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-xl font-light leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0 opacity-80">{item.description}</p>
              </div>
              <div className="md:order-2 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full border border-sage/10 flex items-center justify-center text-sage group-hover:scale-110 group-hover:border-sage/30 transition-all duration-700 bg-white/50 backdrop-blur-sm shadow-sm">
                    <Calendar size={28} />
                 </div>
                 {i !== t.schedule.items.length - 1 && <div className="w-[1px] h-40 bg-sage/10 my-8"></div>}
              </div>
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" title={t.rsvp.title} subtitle={t.rsvp.subtitle}>
        <CustomForm type="rsvp" lang={lang} />
      </Section>

      {/* Music - Specific Spotify Playlist repositioned below RSVP */}
      <Section id="music" title={t.music.title} dark subtitle={t.music.subtitle}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-center text-gray-600 mb-16 italic text-xl leading-relaxed font-light opacity-90">{t.music.text}</p>
          <div className="w-full bg-white p-8 rounded-[4rem] shadow-2xl border border-sage/5">
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius:'32px'}} 
              src="https://open.spotify.com/embed/playlist/1wmRxlpSJ0ZdoSP71G3NOC?utm_source=generator&theme=0" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-[2.5rem]"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-64 text-center border-t border-gray-100 bg-[#F9F7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <Monogram className="mx-auto mb-20 shadow-none border-sage/5" />
          <p className="text-7xl md:text-9xl font-script italic text-sage mb-16 drop-shadow-sm font-light">Adele & Joel</p>
          <p className="text-[11px] uppercase tracking-[0.8em] text-gray-400 font-black mb-20">APRIL 18, 2026 • ALFORTVILLE</p>
          <div className="w-40 h-[1px] bg-sage/10 mx-auto mb-14"></div>
          <p className="text-[13px] font-black tracking-[0.7em] text-sage/40 uppercase">#ADELEANDJOEL2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
