import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log("AudioPlayer mounted");
  }, []);

  useEffect(() => {
    // Load mute preference from localStorage
    const savedMutePreference = localStorage.getItem('isMuted');
    if (savedMutePreference !== null) {
      setIsMuted(savedMutePreference === 'true');
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented or audio error:", error);
        });
      }
    }
    localStorage.setItem('isMuted', String(isMuted));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <audio
        ref={audioRef}
        src="/meditation-music.mp3"
        loop
        preload="auto"
      />
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-xl border-2 shadow-2xl transition-all duration-500 ${
          isMuted 
            ? "bg-white/10 border-white/20 text-white/50" 
            : "bg-primary/20 border-primary text-primary shadow-primary/40 animate-pulse"
        }`}
        aria-label={isMuted ? "Unmute meditation music" : "Mute meditation music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <VolumeX className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      {!isMuted && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 right-0 bg-primary/90 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap font-medium tracking-wider uppercase"
        >
          Meditation Mode
        </motion.div>
      )}
    </div>
  );
};

export default AudioPlayer;
