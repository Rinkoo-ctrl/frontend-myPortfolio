import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50/50 dark:bg-slate-900/20 relative overflow-hidden">
      {/* Moving Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <motion.div 
            className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-[80px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         />
         <motion.div 
            className="absolute bottom-[20%] right-[-5%] w-[300px] h-[300px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[80px]"
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Work Experience */}
        <div className="mb-24">
          <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
          </div>

          <div className="space-y-12 relative border-l-2 border-gray-200 dark:border-slate-800 ml-3 md:ml-6">
            {RESUME_DATA.experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary-500 shadow-md"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                    <div className="text-xl text-primary-600 dark:text-primary-400 font-semibold">{job.company}</div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0"></div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Achievements Stacked */}
        <div id="education" className="flex flex-col gap-20 scroll-mt-24">
           
           {/* Education Section */}
           <div>
              <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Education
                  </h2>
                  <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RESUME_DATA.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-3xl relative overflow-hidden group border-l-4 border-primary-500"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <GraduationCap size={100} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold mb-4">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pr-8">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
                  </motion.div>
                ))}
              </div>
           </div>

           {/* Achievements Section */}
           <div id="achievements" className="scroll-mt-24">
              <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Achievements
                  </h2>
                  <div className="w-20 h-1.5 bg-yellow-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {RESUME_DATA.achievements.map((ach, index) => (
                   <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                    className="glass-card p-8 rounded-3xl relative overflow-hidden group border-l-4 border-yellow-500"
                   >
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-yellow-500">
                        <Award size={100} />
                     </div>
                     <div className="flex items-start gap-4 relative z-10">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400">
                           <Award size={24} />
                        </div>
                        <div>
                             <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold mb-2">
                               Honors & Awards
                             </span>
                             <p className="text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                               {ach}
                             </p>
                        </div>
                     </div>
                   </motion.div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;