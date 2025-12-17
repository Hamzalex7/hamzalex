import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Bot, ArrowRight, Loader } from 'lucide-react';
import { SMART_LINK } from '../constants';

const AiGameMatcher: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!mood) return;
    setLoading(true);
    setRecommendation(null);

    try {
      // In a real production app, you would ideally proxy this request 
      // or use the key strictly within a scope where process.env is populated securely.
      // Per instructions: "The API key must be obtained exclusively from the environment variable process.env.API_KEY"
      const apiKey = process.env.API_KEY || ''; 
      
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        I am a user looking for mobile game recommendations to earn money on Mistplay.
        My current mood or interest is: "${mood}".
        Recommend 1 specific genre of mobile game (e.g., Puzzle, RPG, Strategy, Slot) that fits this mood and explain in one short, exciting sentence why it's fun to play and earn. 
        Don't mention specific game titles, just the genre.
        Keep it under 30 words. Enthusiastic tone.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setRecommendation(response.text);
    } catch (error) {
      console.error("AI Error:", error);
      setRecommendation("Strategy games! They challenge your mind while you rack up points fast.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative bg-slate-900 overflow-hidden border-y border-purple-900/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
           <div className="inline-flex items-center gap-2 text-purple-400 font-bold mb-2">
             <Sparkles className="w-5 h-5 animate-pulse" />
             <span>AI Game Concierge</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
             Not sure what to play? <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Ask the AI!</span>
           </h2>
           <p className="text-slate-400 text-lg mb-8">
             Tell us your mood (e.g., "Relaxed", "Competitive", "Bored"), and our Gemini-powered AI will find the perfect paying game genre for you.
           </p>

           <div className="bg-slate-800 p-2 rounded-xl flex gap-2 border border-slate-700 shadow-2xl max-w-md">
             <input 
               type="text" 
               placeholder="How are you feeling today?" 
               className="bg-transparent text-white px-4 py-3 flex-1 outline-none placeholder:text-slate-500"
               value={mood}
               onChange={(e) => setMood(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleRecommend()}
             />
             <button 
               onClick={handleRecommend}
               disabled={loading || !mood}
               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               {loading ? <Loader className="w-4 h-4 animate-spin" /> : <Bot className="w-5 h-5" />}
             </button>
           </div>

           {recommendation && (
             <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 p-6 rounded-xl animate-fade-in-up">
               <h3 className="text-purple-300 font-bold text-sm uppercase mb-2">AI Suggestion:</h3>
               <p className="text-xl text-white font-medium italic">"{recommendation}"</p>
               <a href={SMART_LINK} className="inline-flex items-center gap-2 text-yellow-400 font-bold mt-4 hover:underline">
                 Find these games now <ArrowRight className="w-4 h-4" />
               </a>
             </div>
           )}
        </div>

        <div className="flex-1 flex justify-center relative">
           <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
              <img src="https://picsum.photos/400/400?random=20" alt="AI Robot" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                 <div className="text-sm">
                    <div className="font-bold text-white">Gemini 2.5 Flash</div>
                    <div className="text-slate-400 text-xs">Powered Intelligence</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AiGameMatcher;
