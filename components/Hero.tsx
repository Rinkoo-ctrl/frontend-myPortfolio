import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ArrowRight, Github, Server, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Ambient Glows - simplified to work with Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Subtle color washes that blend with particles */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-300/20 dark:bg-primary-900/10 rounded-full blur-[100px] opacity-60 dark:opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 dark:opacity-40" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100/80 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide border border-primary-200 dark:border-primary-800 mb-4 transition-colors backdrop-blur-sm">
              Hire to Retire
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white">
              Hi, I'm <br />
              {/* Perfectly matched gradient for the name */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 transition-all duration-500">
                {RESUME_DATA.name}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            {RESUME_DATA.title} specializing in building scalable backend systems, microservices, and AI-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href={`https://github.com/${RESUME_DATA.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 glass-card text-slate-900 dark:text-white rounded-2xl font-semibold hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 border border-slate-200 dark:border-white/10"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Abstract "Distributed System" Animation */}
        <div className="order-1 lg:order-2 flex justify-center relative h-[500px] w-full items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
             {/* Central Core */}
             <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 dark:from-primary-500 dark:to-blue-600 shadow-2xl shadow-primary-500/50 dark:shadow-primary-500/50 flex items-center justify-center animate-pulse transition-colors duration-500">
                <Server size={48} className="text-white" />
             </div>

             {/* Orbiting Elements - Ring 1 */}
             <div className="absolute border border-slate-200 dark:border-gray-700 rounded-full w-[280px] h-[280px] animate-spin-slow transition-colors">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center transform rotate-0">
                   <Database size={20} className="text-primary-500" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                   <Globe size={20} className="text-blue-500" />
                </div>
             </div>

             {/* Orbiting Elements - Ring 2 */}
             <div className="absolute border border-dashed border-slate-300 dark:border-gray-600 rounded-full w-[450px] h-[450px] animate-reverse-spin transition-colors">
                 <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                   <Github size={24} className="text-slate-800 dark:text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                   <span className="font-mono text-xs font-bold text-orange-500">AWS</span>
                </div>
             </div>
             
             {/* Floating Particles */}
             <motion.div 
               className="absolute top-20 right-20 w-3 h-3 bg-primary-400 dark:bg-primary-400 rounded-full blur-[1px]"
               animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 4, repeat: Infinity }}
             />
             <motion.div 
               className="absolute bottom-20 left-20 w-4 h-4 bg-blue-400 rounded-full blur-[1px]"
               animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
             />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;