"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, MapPin, Calendar, Camera, Sparkles, ChevronRight } from "lucide-react";

export default function LongDistanceWebsite() {
  const [step, setStep] = useState(1);

  // Future plans state for reveals
  const [revealedPlans, setRevealedPlans] = useState<{ [key: number]: boolean }>({});
  const togglePlan = (index: number) => {
    setRevealedPlans((prev) => ({ ...prev, [index]: true }));
  };

  // Polaroid photos state
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const memories = [
    { image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80", caption: "Our cafeteria lunch and those warm little laughs" },
    { image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80", caption: "Remember our university date?" },
    { image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", caption: "Counting down to more moments like this" },
  ];

  // Letter open state
  const [letterOpen, setLetterOpen] = useState(false);

  const plans = [
    { title: "Hug for 30 mins", desc: "Just holding you tight!" },
    { title: "Food Date", desc: "Eating at our favorite spot." },
    { title: "Movie Date", desc: "Watching something together." },
    { title: "Endless Photos", desc: "Capturing your beautiful smile." },
    { title: "Late Night Walks", desc: "Hand in hand under the stars." },
    { title: "Make New Memories", desc: "Creating moments we'll never forget." },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#5C4033] flex flex-col items-center justify-center p-6 selection:bg-pink-100 font-sans relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />

      {/* STEP 1: WELCOME SCREEN */}
      {step === 1 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          className="text-center max-w-md flex flex-col items-center"
        >
          {/* Cute Bear Icon Badge */}
          <div className="w-24 h-24 mb-6 rounded-full bg-white shadow-md flex items-center justify-center relative border-4 border-pink-100">
            <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-pink-100 bg-pink-50">
              <video
                src="/stickers/love-bear.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            {/*<div className="absolute -top-1 -right-1 w-7 h-7 overflow-hidden rounded-full bg-white shadow-sm border border-pink-100 animate-bounce">
              <video
                src=""
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>*/}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-3 font-serif">
            Until We Meet Again
          </h1>
          <p className="text-sm text-stone-500 italic mb-8">
            A little something I made just for you... because I miss you.
          </p>

          <button
            onClick={() => setStep(2)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            Let&apos;s Begin <ChevronRight size={18} />
          </button>
        </motion.div>
      )}

      {/* STEP 2: DISTANCE BETWEEN US */}
      {step === 2 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-stone-700 mb-6 font-serif">6 km between us</h2>

          {/* Map Card */}
          <div className="w-[360px] sm:w-[420px] h-56 bg-white/90 rounded-[28px] shadow-[0_20px_60px_rgba(244,114,182,0.12)] border border-pink-100 relative flex items-center justify-center mb-6 overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="absolute inset-x-6 top-6 bottom-6 rounded-[26px] border border-dashed border-pink-200/80" />

            <svg viewBox="0 0 420 200" className="absolute inset-0 w-full h-full z-0">
              <motion.path
                d="M 65 130 C 120 70, 155 35, 210 90 S 310 160, 355 110"
                fill="none"
                stroke="rgba(244, 114, 182, 0.9)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 14"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <motion.path
                d="M 65 130 C 120 70, 155 35, 210 90 S 310 160, 355 110"
                fill="none"
                stroke="rgba(251, 113, 133, 0.95)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
              />
            </svg>

            <motion.div
              className="absolute z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border-2 border-pink-200 text-rose-500"
              initial={{ x: 0, y: 0 }}
              animate={{ x: [0, 48, 92, 140, 180], y: [0, -18, -28, -18, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={12} className="fill-rose-500" />
            </motion.div>

            <div className="absolute left-[12%] top-[56%] z-10 flex flex-col items-center text-blue-500">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border-2 border-blue-200 flex items-center justify-center">
                <MapPin size={22} className="text-blue-500" />
              </div>
              <span className="mt-2 text-sm font-bold text-stone-700">Me</span>
            </div>

            <div className="absolute right-[12%] top-[52%] z-10 flex flex-col items-center text-rose-500">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border-2 border-rose-200 flex items-center justify-center">
                <MapPin size={22} className="text-rose-500" />
              </div>
              <span className="mt-2 text-sm font-bold text-stone-700">You</span>
            </div>
          </div>

          <p className="text-sm text-rose-500 font-medium italic mb-8">...but never between our hearts.</p>

          <button
            onClick={() => setStep(3)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            Keep Going <ChevronRight size={18} />
          </button>
        </motion.div>
      )}

      {/* STEP 3: DAYS SINCE LAST MET */}
      {step === 3 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xs tracking-[0.35em] text-stone-400 font-semibold uppercase mb-3"
          >
            We last met on
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl font-bold text-stone-700 mb-7 font-serif"
          >
            27 June 2026
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="relative w-[360px] sm:w-[380px] p-7 bg-white/90 rounded-[30px] shadow-[0_20px_60px_rgba(244,114,182,0.12)] border border-pink-100 mb-7 text-center overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-100/60 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-rose-100/70 blur-2xl" />
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="text-[5.5rem] sm:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 tracking-[-0.08em] mb-2 font-serif leading-none">51</div>
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-[0.35em] mb-4">Days Ago</div>
              <p className="text-base sm:text-lg text-stone-500 italic font-medium leading-relaxed">
                And I’ve missed you every single one of them.
              </p>
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setStep(4)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl transition-all flex items-center gap-2"
          >
            Keep Going <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      )}

      {/* STEP 4: THINGS WE'LL DO */}
      {step === 4 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-xl flex flex-col items-center w-full"
        >
          <h2 className="text-3xl font-bold text-stone-700 font-serif mb-1">Things we'll do</h2>
          <p className="text-xs text-stone-400 italic mb-6">when we finally meet again</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                layout
                whileTap={{ scale: 0.98 }}
                onClick={() => togglePlan(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                  revealedPlans[idx] 
                    ? "bg-white border-pink-200 text-stone-700" 
                    : "bg-pink-50/50 border-pink-100 hover:bg-pink-50 text-pink-400"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-bold text-stone-300">#{idx + 1}</span>
                  <div className="text-left min-w-0">
                    <AnimatePresence mode="wait">
                      {revealedPlans[idx] ? (
                        <motion.div
                          key="revealed"
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.22 }}
                        >
                          <h4 className="text-sm font-bold text-stone-800">{plan.title}</h4>
                          <p className="text-xs text-stone-400">{plan.desc}</p>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="hidden"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs font-semibold tracking-wider text-pink-400 uppercase"
                        >
                          Tap to reveal
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: revealedPlans[idx] ? [1, 1.25, 1] : 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <Heart size={16} className={revealedPlans[idx] ? "text-rose-500 fill-rose-500" : "text-pink-300"} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setStep(5)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <span>See Our Memories</span>
            <div className="w-5 h-5 overflow-hidden rounded-full">
              <video src="/stickers/sparkle-heart.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </button>
        </motion.div>
      )}

      {/* STEP 5: MEMORIES POLAROID */}
      {step === 5 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-stone-700 font-serif mb-1">Our Memories</h2>
          <p className="text-xs text-stone-400 italic mb-6">Tap the photo to reveal the next</p>

          {/* Polaroid Card */}
          <div 
            onClick={() => setCurrentPhoto((prev) => (prev + 1) % memories.length)}
            className="bg-white p-4 pb-6 rounded-2xl shadow-md border border-stone-100 cursor-pointer hover:rotate-1 transition-transform w-64 mb-6 relative group"
          >
            {/* Washi tape mockup */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/60 rotate-1 rounded-xs" />
            
            <img 
              src={memories[currentPhoto].image} 
              alt="Memory" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-stone-500 font-medium">{memories[currentPhoto].caption}</span>
              <Heart size={14} className="text-rose-400 fill-rose-400" />
            </div>
          </div>

          <button
            onClick={() => setStep(6)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            A Letter For You <Mail size={16} />
          </button>
        </motion.div>
      )}

      {/* STEP 6: LOVE LETTER ENVELOPE */}
      {step === 6 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md flex flex-col items-center w-full"
        >
          <h3 className="text-xs tracking-widest text-stone-400 font-semibold uppercase mb-1">A Message For You</h3>
          <h2 className="text-3xl font-bold text-stone-700 font-serif mb-6">From My Heart</h2>

          <div className="relative flex items-center justify-center w-full min-h-[420px] overflow-visible">
            <AnimatePresence mode="wait">
              {!letterOpen ? (
                <motion.div
                  key="envelope"
                  initial={{ opacity: 0, y: 18, rotateX: 80 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => setLetterOpen(true)}
                  className="relative z-0 w-72 h-48 rounded-[28px] bg-gradient-to-b from-pink-100 to-rose-100 shadow-[0_18px_35px_rgba(244,114,182,0.18)] border border-pink-200 cursor-pointer flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_55%)]" />
                  <div className="absolute left-0 right-0 top-0 h-1/2 bg-white/30" />
                  <div className="absolute inset-x-6 top-1/2 h-[2px] bg-pink-200/70" />
                  <div className="absolute left-1/2 top-1/2 h-32 w-[2px] bg-pink-200/70 -translate-x-1/2 -translate-y-1/2 rotate-[20deg]" />
                  <div className="absolute left-1/2 top-1/2 h-32 w-[2px] bg-pink-200/70 -translate-x-1/2 -translate-y-1/2 -rotate-[20deg]" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 flex items-center justify-center shadow-sm border border-pink-100">
                    <video
                      src="/stickers/love-heart.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute bottom-7 text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em]">Tap to Open</span>
                </motion.div>
              ) : (
                <motion.div
                  key="letter"
                  initial={{ opacity: 0, x: -60, y: 35, rotate: -10, scale: 0.75 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 70, y: -15, rotate: 10, scale: 0.8 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-20 w-[340px] bg-white p-6 rounded-[22px] shadow-[0_25px_45px_rgba(244,114,182,0.18)] border border-pink-100 text-left font-serif"
                >
                  <button
                    type="button"
                    onClick={() => setLetterOpen(false)}
                    className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 bg-white px-2 py-1 rounded-full border border-pink-100 shadow-sm hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-100/80 -rotate-2 rounded-xs" />
                  <div className="text-xs text-rose-400 font-sans font-bold mb-3 flex items-center gap-1">
                    <Sparkles size={14} /> For My Favorite Person
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4 italic">
                    "My Dearest,<br/><br/>
                    Every single day we spend apart only makes me realize how much you truly mean to me. The distance is hard sometimes, but it’s just a test of how far our love can travel.<br/><br/>
                    I count the days until I can finally hold you in my arms, hear your voice, and just be next to you.<br/><br/>
                    Thank you for being the best part of my life. I promise the wait will be worth it when I finally get to see you again.<br/><br/>
                    Forever Yours,<br/>
                    Me :)"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {letterOpen && (
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={() => setStep(7)}
              className="relative z-30 mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>One Last Thing</span>
              <div className="w-5 h-5 overflow-hidden rounded-full">
                <video src="/stickers/sparkle-heart.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </motion.button>
          )}
        </motion.div>
      )}

      {/* STEP 7: FINALE */}
      {step === 7 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md flex flex-col items-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mb-4 w-24 h-24 overflow-hidden rounded-full bg-white shadow-md border border-pink-100"
          >
            <video
              src="/stickers/sweet-hug.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h2 className="text-3xl font-bold text-stone-800 font-serif mb-2">I Love You.</h2>
          <p className="text-sm text-stone-500 italic">I can't wait to see you again.</p>
        </motion.div>
      )}

    </main>
  );
}
