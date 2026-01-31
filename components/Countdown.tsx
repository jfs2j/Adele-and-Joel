
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

const TARGET_DATE = new Date('2026-04-18T14:30:00').getTime();

interface CountdownProps {
  lang: Language;
}

const RollingNumber = ({ value }: { value: number }) => {
  return (
    <div className="h-[1.4em] overflow-hidden relative inline-block">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="block text-4xl md:text-7xl font-serif text-sage font-light tracking-tighter"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Countdown: React.FC<CountdownProps> = ({ lang }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const labels = {
    en: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    fr: { days: 'Jours', hours: 'Heures', minutes: 'Minutes', seconds: 'Secondes' }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center px-4 md:px-8 py-6 min-w-[100px] md:min-w-[160px]">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-sage/5 w-full flex items-center justify-center py-8 md:py-12 mb-4">
        <RollingNumber value={value} />
      </div>
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-sage/70 font-black">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1.8 }}
      className="flex flex-wrap items-center justify-center mt-16 md:mt-28 max-w-6xl mx-auto"
    >
      <TimeUnit value={timeLeft.days} label={labels[lang].days} />
      <TimeUnit value={timeLeft.hours} label={labels[lang].hours} />
      <TimeUnit value={timeLeft.minutes} label={labels[lang].minutes} />
      <TimeUnit value={timeLeft.seconds} label={labels[lang].seconds} />
    </motion.div>
  );
};

export default Countdown;
