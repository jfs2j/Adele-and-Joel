
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className="border border-[#e5e7eb] rounded-lg overflow-hidden transition-all duration-300">
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-[#f9fafb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B9D83] focus:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium text-[#444]">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-[#8B9D83] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-[#666] leading-relaxed border-t border-[#f3f4f6]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
