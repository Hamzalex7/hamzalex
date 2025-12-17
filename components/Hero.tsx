import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Gift, Zap } from 'lucide-react';
import { SMART_LINK } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Gradients & Video Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Floating Particles/Coins */}
      <AnimatePresence>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0, x: Math.random() * 1000 - 500 }}
            animate={{ 
              y: window.innerHeight + 100, 
              opacity: [0, 1, 0], 
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute z-0 pointer-events-none"
          >
            {i % 2 === 0 ? (
              <div className="w-8 h-8 rounded-full bg-yellow-400 coin-glow border-2 border-yellow-200 flex items-center justify-center text-xs font-bold text-yellow-900">$</div>
            ) : (
              <Gift className="text-purple-400 w-8 h-8 opacity-50" />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-green-300 tracking-wider">Join 10M+ Players Earning NOW</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-orbitron leading-tight mb-6 tracking-tight">
            Play Games <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 neon-glow">→</span> Earn <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 neon-glow">REAL GIFT CARDS</span>
            <br />INSTANTLY! 🚀
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Discover curated hits, rack up Units, and cash out Amazon, PayPal, & Uber rewards. 
            <span className="block mt-2 font-semibold text-white">#1 in USA 🇺🇸 AU 🇦🇺 KR 🇰🇷 DE 🇩🇪 CA 🇨🇦</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={SMART_LINK}
              className="group relative px-8 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_rgba(124,58,237,0.8)] transition-all duration-300 transform hover:scale-105 active:scale-95 w-full md:w-auto overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <div className="flex items-center justify-center gap-3">
                <Gamepad2 className="w-6 h-6 animate-bounce" />
                <span>Download FREE & Start Earning</span>
              </div>
            </a>
            
            <div className="text-left bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center gap-3">
               <div className="text-yellow-400">
                  <Zap className="w-8 h-8 fill-yellow-400" />
               </div>
               <div>
                 <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Bonus Ends In</p>
                 <p className="font-orbitron text-xl font-bold text-white tabular-nums">
                   {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                 </p>
               </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 opacity-80">
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Tailored for YOUR country</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No Credit Card Required</span>
            <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Instant Digital Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
