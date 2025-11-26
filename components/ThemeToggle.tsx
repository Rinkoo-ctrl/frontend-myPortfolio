import React, { useEffect, useState } from 'react';
import { Moon, Sun, Cloud, Stars } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full flex items-center transition-colors duration-500 shadow-inner ${
        theme === 'light' ? 'bg-sky-400' : 'bg-slate-800'
      }`}
      aria-label="Toggle Theme"
    >
      {/* Track Background Elements */}
      <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
         {/* Clouds for Light Mode */}
         <motion.div 
            className="absolute top-1 right-2 text-white opacity-80"
            initial={false}
            animate={{ x: theme === 'light' ? 0 : 20, opacity: theme === 'light' ? 1 : 0 }}
         >
           <Cloud size={10} fill="currentColor" />
         </motion.div>
         <motion.div 
            className="absolute bottom-1 right-5 text-white opacity-60"
            initial={false}
            animate={{ x: theme === 'light' ? 0 : 20, opacity: theme === 'light' ? 1 : 0 }}
         >
           <Cloud size={8} fill="currentColor" />
         </motion.div>

         {/* Stars for Dark Mode */}
         <motion.div 
            className="absolute top-1.5 left-2 text-yellow-100 opacity-80"
            initial={false}
            animate={{ x: theme === 'dark' ? 0 : -20, opacity: theme === 'dark' ? 1 : 0 }}
         >
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
         </motion.div>
         <motion.div 
            className="absolute bottom-2 left-4 text-yellow-100 opacity-60"
            initial={false}
            animate={{ x: theme === 'dark' ? 0 : -20, opacity: theme === 'dark' ? 1 : 0 }}
         >
             <div className="w-1 h-1 bg-white rounded-full"></div>
         </motion.div>
      </div>

      {/* Moving Knob (Sun/Moon) */}
      <motion.div
        className="w-6 h-6 rounded-full bg-white shadow-md absolute left-1 flex items-center justify-center z-10"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ 
          x: theme === 'light' ? 32 : 0,
          backgroundColor: theme === 'light' ? '#ffffff' : '#fbbf24' // White sun vs Yellow moon
        }}
      >
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'light' ? 1 : 0, scale: theme === 'light' ? 1 : 0.5 }}
          className="absolute text-orange-400"
        >
          <Sun size={14} fill="currentColor" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'dark' ? 1 : 0, scale: theme === 'dark' ? 1 : 0.5 }}
          className="absolute text-slate-900"
        >
          <Moon size={14} fill="currentColor" />
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;