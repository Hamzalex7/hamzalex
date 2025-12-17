import React from 'react';
import { motion } from 'framer-motion';
import { GIFT_CARDS, TESTIMONIALS, STATS } from '../constants';
import { Star } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {STATS.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-colors">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-3xl font-black font-orbitron text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
             <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl text-center flex flex-col items-center justify-center transform scale-105 shadow-xl">
                 <span className="font-orbitron font-bold text-xl text-white">#1 Reward App</span>
                 <span className="text-xs text-white/80">In 5 Countries</span>
             </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">Rewards Showcase</h2>
            <p className="text-blue-400 font-semibold tracking-wide uppercase">Redeem in minutes!</p>
        </div>

        {/* Scrolling Cards */}
        <div className="relative w-full overflow-hidden h-[300px] mb-20 flex items-center">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
                className="flex gap-8 absolute"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...GIFT_CARDS, ...GIFT_CARDS, ...GIFT_CARDS].map((card, idx) => (
                    <div key={idx} className="w-[280px] h-[160px] flex-shrink-0 perspective-1000 group cursor-pointer">
                        <div className={`relative w-full h-full rounded-2xl shadow-2xl transition-all duration-500 transform group-hover:scale-105 bg-gradient-to-br ${card.color} p-6 flex flex-col justify-between overflow-hidden border border-white/10`}>
                            {/* Decorative Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            
                            <div className="flex justify-between items-start z-10">
                                <span className="font-bold text-xl">{card.name}</span>
                                <span className="font-orbitron font-black text-2xl">{card.value}</span>
                            </div>
                            <div className="flex justify-between items-end z-10">
                                <div className="text-xs opacity-75 tracking-widest">DIGITAL CODE</div>
                                <div className="w-10 h-6 bg-yellow-400/20 rounded border border-yellow-400/50" />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
                    <div className="absolute -top-4 -right-4 bg-purple-600 rounded-full p-2">
                        <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500" />
                        <div>
                            <h4 className="font-bold text-white">{t.name}</h4>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                                {t.country === 'USA' ? '🇺🇸' : t.country === 'AU' ? '🇦🇺' : '🇰🇷'} Verified Player
                            </span>
                        </div>
                    </div>
                    <p className="text-slate-300 italic">"{t.text}"</p>
                    <div className="flex mt-3 text-yellow-500">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
