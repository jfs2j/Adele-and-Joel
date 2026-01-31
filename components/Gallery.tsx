
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      {GALLERY_IMAGES.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square cursor-pointer"
        >
          {/* REPLACE with actual high-res photo path */}
          <img 
            src={img.url} 
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs uppercase tracking-widest text-sage font-semibold">View Detail</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
