import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-gray-900 text-white overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-900/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Let's build something <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">extraordinary.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gray-800 text-primary-400">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">Email Me</h4>
                            <a 
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.contact.email}`} 
                              className="text-gray-400 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                {RESUME_DATA.contact.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="p-3 rounded-lg bg-gray-800 text-primary-400">
                            <Linkedin size={24} />
                        </div>
                         <div>
                            <h4 className="text-lg font-semibold">LinkedIn</h4>
                            <a 
                              href={`https://www.linkedin.com/in/${RESUME_DATA.contact.linkedin}`} 
                              className="text-gray-400 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                linkedin.com/in/{RESUME_DATA.contact.linkedin}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gray-800 text-green-400">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">WhatsApp Me</h4>
                            <a 
                              href="https://wa.me/919821764926" 
                              className="text-gray-400 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                +91 98217 64926
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                         <div className="p-3 rounded-lg bg-gray-800 text-primary-400">
                            <Phone size={24} />
                        </div>
                         <div>
                            <h4 className="text-lg font-semibold">Call Me</h4>
                            <a href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                                {RESUME_DATA.contact.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                         <div className="p-3 rounded-lg bg-gray-800 text-primary-400">
                            <MapPin size={24} />
                        </div>
                         <div>
                            <h4 className="text-lg font-semibold">Location</h4>
                            <p className="text-gray-400">
                                {RESUME_DATA.contact.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-6">
                    {SOCIAL_LINKS.map((link, idx) => (
                        <motion.a 
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: '#a78bfa' }} // primary-400
                            className="text-gray-400 transition-colors"
                        >
                            <link.icon size={24} />
                        </motion.a>
                    ))}
                </div>
                <p className="text-gray-500 text-sm">
                    Designed & Built by <span className="text-white font-semibold">{RESUME_DATA.name}</span>
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Contact;