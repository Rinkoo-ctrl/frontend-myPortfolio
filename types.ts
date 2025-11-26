export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  techStack: string[];
  description: string;
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  achievements: string[];
}