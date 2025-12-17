import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Rewards from './Rewards';
import AiGameMatcher from './AiGameMatcher';
import StickyFooter from './StickyFooter';
import { SMART_LINK } from '../constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Header / Nav */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 cursor-pointer">
          PLAY<span className="text-white">2</span>REWARDS
        </div>
        <a 
          href={SMART_LINK}
          className="hidden md:block bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-6 py-2 rounded-full font-bold transition-all text-sm"
        >
          Sign In
        </a>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <Rewards />
        <AiGameMatcher />
        
        {/* Footer */}
        <footer className="bg-black py-12 pb-32 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl font-black font-orbitron text-slate-600 mb-6">PLAY2REWARDS</div>
            <div className="flex justify-center gap-6 text-slate-500 text-sm mb-8">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Play2Rewards. All rights reserved. <br/>
              Powered by Adbleu Media. Not affiliated with Google, Amazon, or PayPal.
            </p>
          </div>
        </footer>
      </main>

      <StickyFooter />
    </div>
  );
};

export default App;