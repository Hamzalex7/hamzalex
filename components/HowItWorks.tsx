import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Trophy, Gift } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="w-12 h-12 text-blue-400" />,
    title: "1. Play Games",
    desc: "Browse our curated list of games tailored to your interests.",
    color: "bg-blue-500/20 border-blue-500/50"
  },
  {
    icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    title: "2. Earn Units",
    desc: "Rack up Units as you play. The more you play, the more you earn!",
    color: "bg-yellow-500/20 border-yellow-500/50"
  },
  {
    icon: <Gift className="w-12 h-12 text-purple-400" />,
    title: "3. Redeem Rewards",
    desc: "Cash out immediately for Amazon, PayPal, Visa, and more.",
    color: "bg-purple-500/20 border-purple-500/50"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-orbitron font-bold mb-4">How It <span className="text-purple-400">Works</span></h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">Start earning your first reward in less than 10 minutes with our simple 3-step process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className={`p-8 rounded-2xl border ${step.color} backdrop-blur-sm relative group hover:bg-opacity-30 transition-all duration-300`}
                    >
                        <div className="bg-slate-900 rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-orbitron mb-3 text-center">{step.title}</h3>
                        <p className="text-slate-400 text-center leading-relaxed">{step.desc}</p>
                        
                        {/* Connecting Line (Desktop Only) */}
                        {idx !== 2 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-slate-700 transform -translate-y-1/2 z-[-1]" />
                        )}
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <div className="inline-block bg-slate-900 border border-slate-700 rounded-lg px-6 py-3">
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-semibold text-slate-300">
                        <li className="flex items-center gap-2">🎯 Daily Missions</li>
                        <li className="flex items-center gap-2">🏆 Global Leaderboards</li>
                        <li className="flex items-center gap-2">🚫 No In-App Purchases Needed</li>
                    </ul>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorks;
