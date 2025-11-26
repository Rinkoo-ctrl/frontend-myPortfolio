import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-b from-transparent to-primary-100/30 dark:to-primary-900/10 opacity-50 blur-3xl rounded-full"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full shadow-md hover:shadow-xl dark:shadow-none transition-all"
            >
              {/* Card Header */}
              <div className="h-1.5 bg-gradient-to-r from-primary-500 to-blue-500"></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <FolderGit2 size={20} />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;