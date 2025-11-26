import { ResumeData } from './types';
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Rinkoo",
  title: "Senior Software Developer",
  contact: {
    phone: "+91 98217 64926",
    email: "rinkookandpal1966@gmail.com",
    github: "Rinkoo-ctrl",
    linkedin: "rinkoo2000",
    location: "Gurugram, India"
  },
  summary: "Experienced Software Developer specializing in building secure, scalable RESTful APIs and microservices. Proven track record in optimizing database performance and delivering high-quality modules under tight deadlines.",
  experience: [
    {
      company: "Mrikal",
      role: "Software Developer",
      location: "Gurugram",
      duration: "May 2023 - Present",
      description: [
        "Developed secure and scalable RESTful APIs with Node.js and Express.js, boosting performance by 30% and ensuring high availability.",
        "Optimized MongoDB queries, reducing latency by 25% with efficient indexing.",
        "Collaborated with product and front-end teams to deliver seamless user experiences.",
        "Documented APIs, ERDs and workflows, streamlining onboarding and cross-team collaboration.",
        "Built AI-powered insights by integrating OpenAI API with database queries to analyze data and generate intelligent responses."
      ]
    }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Node.js", "Express.js", "React.js", "Angular.js", "JavaScript", "TypeScript"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Redis", "Elasticsearch", "SQL", "Sequelize", "Mongoose"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Lambda, SQS, S3, EC2)", "Docker", "Microservices", "CloudWatch", "EventBridge"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Postman", "Jest", "JWT", "Web Scraping (Puppeteer)", "System Design"]
    }
  ],
  education: [
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      degree: "M.Tech, Software Engineering",
      year: "2024 – 2026"
    },
    {
      institution: "Rajasthan Technical University",
      degree: "B.Tech",
      year: "2018 – 2022"
    }
  ],
  projects: [
    {
      title: "Rule Engine Platform",
      subtitle: "Elevance Health, USA",
      techStack: ["Node.js", "Elasticsearch", "Redis", "AWS", "Go Rules"],
      description: "Worked on a Pipe-and-Filter based Rule Engine. Built high-performance rule execution flows and optimized search + caching for large-scale insurance datasets."
    },
    {
      title: "WhatTheFootball",
      subtitle: "Football Trading System",
      techStack: ["Node.js", "MongoDB", "WebSockets"],
      description: "Handled complete backend architecture. Built live trading logic, real-time data processing, and improved platform stability for a market-driven system."
    },
    {
      title: "Athithi Pro CRM",
      subtitle: "InterGlobe Aviation Pvt. Ltd.",
      techStack: ["TypeScript", "Node.js", "Microservices"],
      description: "Developed backend for a fast-paced CRM. Delivered high-quality modules including user workflows, automation APIs, and secure data handling."
    },
    {
      title: "WaitZeros",
      subtitle: "Healthcare Appointment Platform",
      techStack: ["Node.js", "AWS", "Redis", "Event-Driven"],
      description: "Built microservices for doctor appointment booking. Improved system performance, scalability, and patient–doctor workflow efficiency."
    }
  ],
  achievements: [
    "Gentleman and Best Hosteler Award – Rajasthan Technical University, 2022. Recognized for leadership, exemplary conduct, and active involvement."
  ]
};

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: `https://github.com/${RESUME_DATA.contact.github}`, icon: Github },
  { platform: "LinkedIn", url: `https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`, icon: Linkedin },
  { platform: "Email", url: `https://mail.google.com/mail/?view=cm&fs=1&to=${RESUME_DATA.contact.email}`, icon: Mail },
  { platform: "WhatsApp", url: "https://wa.me/919821764926", icon: MessageCircle },
  { platform: "Phone", url: `tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`, icon: Phone },
];