import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Ambient Background Animation */}
      <motion.div
        className="absolute top-20 right-[-100px] w-64 h-64 bg-primary-300/20 dark:bg-primary-800/20 rounded-full blur-[60px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[-50px] w-72 h-72 bg-blue-300/20 dark:bg-blue-800/20 rounded-full blur-[60px]"
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border-l-4 border-primary-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-primary-500 dark:hover:border-primary-500 transition-all cursor-default"
                  >
                    <CheckCircle2 size={14} className="text-primary-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;