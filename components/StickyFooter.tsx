import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { SMART_LINK } from '../constants';

const StickyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 bg-gradient-to-t from-slate-900 to-slate-900/95 backdrop-blur-lg border-t border-purple-500/30"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="hidden md:block">
               <p className="text-white font-bold text-lg">Don't miss out on free cash! 💸</p>
               <p className="text-slate-400 text-sm">Join 10,000+ users who installed today.</p>
            </div>
            
            <a 
              href={SMART_LINK}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black font-orbitron py-4 px-8 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              INSTALL NOW & GET BONUS UNITS
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyFooter;
