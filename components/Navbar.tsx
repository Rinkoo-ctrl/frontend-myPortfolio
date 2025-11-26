import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { RESUME_DATA } from '../constants';
import { jsPDF } from 'jspdf';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Small timeout to allow the mobile menu to begin closing
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    
    // Set font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(RESUME_DATA.name.toUpperCase(), 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const contactInfo = `${RESUME_DATA.contact.phone} | ${RESUME_DATA.contact.email} | ${RESUME_DATA.contact.location}`;
    doc.text(contactInfo, 105, 28, { align: "center" });
    doc.text(`LinkedIn: ${RESUME_DATA.contact.linkedin} | GitHub: ${RESUME_DATA.contact.github}`, 105, 33, { align: "center" });

    // Helper for sections
    let yPos = 45;
    const addSectionTitle = (title: string) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(title.toUpperCase(), 20, yPos);
      doc.line(20, yPos + 2, 190, yPos + 2);
      yPos += 10;
    };

    const checkPageBreak = (needed: number) => {
      if (yPos + needed > 280) {
        doc.addPage();
        yPos = 20;
      }
    };

    // Experience
    addSectionTitle("Experience");
    RESUME_DATA.experience.forEach((job) => {
      checkPageBreak(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(`${job.role} - ${job.company}`, 20, yPos);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(`${job.duration} | ${job.location}`, 190, yPos, { align: "right" });
      yPos += 6;

      job.description.forEach((desc) => {
        const lines = doc.splitTextToSize(`• ${desc}`, 170);
        checkPageBreak(lines.length * 5);
        doc.text(lines, 20, yPos);
        yPos += lines.length * 5;
      });
      yPos += 5;
    });

    // Skills
    addSectionTitle("Skills");
    RESUME_DATA.skills.forEach((skill) => {
      checkPageBreak(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(`${skill.category}:`, 20, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(skill.items.join(", "), 65, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Projects
    addSectionTitle("Projects");
    RESUME_DATA.projects.forEach((proj) => {
      checkPageBreak(25);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(proj.title, 20, yPos);
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      doc.text(proj.subtitle, 190, yPos, { align: "right" });
      yPos += 5;
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const lines = doc.splitTextToSize(proj.description, 170);
      doc.text(lines, 20, yPos);
      yPos += lines.length * 5;
      
      doc.setFontSize(9);
      doc.setTextColor(100);
      doc.text(`Tech: ${proj.techStack.join(", ")}`, 20, yPos);
      doc.setTextColor(0);
      yPos += 8;
    });

    // Education
    addSectionTitle("Education");
    RESUME_DATA.education.forEach((edu) => {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(edu.institution, 20, yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(edu.year, 190, yPos, { align: "right" });
      yPos += 5;
      doc.text(edu.degree, 20, yPos);
      yPos += 10;
    });

    // Achievements
    addSectionTitle("Achievements");
    RESUME_DATA.achievements.forEach((ach) => {
      checkPageBreak(15);
      const lines = doc.splitTextToSize(`• ${ach}`, 170);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(lines, 20, yPos);
      yPos += lines.length * 5;
    });

    doc.save("Rinkoo_Resume.pdf");
  };

  const navLinks = [
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-display tracking-tighter text-gray-900 dark:text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {RESUME_DATA.name}<span className="text-primary-600">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Download size={16} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, idx) => (
                <button 
                  key={idx} 
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 text-left w-full py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
               <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold mt-2"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;