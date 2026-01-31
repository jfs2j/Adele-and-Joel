
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-32 px-6 md:px-12 overflow-hidden ${dark ? 'bg-[#F9F7F2]' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {title && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-[#222] tracking-tight italic">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.4em] text-[#73866C] font-bold max-w-lg mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex justify-center items-center space-x-6">
               <div className="w-20 h-[1px] bg-gold/30"></div>
               <div className="w-3 h-3 rotate-45 border border-gold/40"></div>
               <div className="w-20 h-[1px] bg-gold/30"></div>
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Botanical watercolor texture background */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-sage/5 -z-0 opacity-10 pointer-events-none transform skew-x-6 origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gold/5 -z-0 opacity-5 pointer-events-none transform -skew-x-12 origin-bottom-left"></div>
    </section>
  );
};

export default Section;
