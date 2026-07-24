import { NavLink, Project, Service, Skill, SocialLink } from "./types.utils";
import { Code, Github, Globe, Instagram, Layout, Linkedin, Server, ShoppingCart } from "lucide-react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPython,
  SiPhp,
  SiMysql 
} from "react-icons/si";

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { icon: <Github size={20} />, href: 'https://github.com/esele67', label: 'GitHub' },
];
export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={24} className="text-yellow-500" />,
    level: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} className="text-blue-600" />,
    level: 88,
  },
  {
    name: "React",
    icon: <SiReact size={24} className="text-blue-300" />,
    level: 85,
  },
   {
    name: "Python",
    icon: <SiPython size={24} className="text-blue-300" />,
    level: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} className="text-black" />,
    level: 80,
  },
 {
  name: "Express.js",
  icon: <SiExpress size={24} className="text-black" />,
  level: 80,
},
  {
    name: "Nest.js",
    icon: <SiNestjs size={24} className="text-red-600" />,
    level: 78,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} className="text-green-600" />,
    level: 70,
  },
  {
  name: "PHP",
  icon: <SiPhp size={24} className="text-indigo-400" />,
  level: 85,
},
   {
  name: "MySQL",
  icon: <SiMysql size={24} className="text-blue-500" />,
  level: 85,
},
  {
    name: "RESTful APIs",
    icon: <Globe size={24} className="text-indigo-600" />,
    level: 80,
  },
  {
    name: "Git and GitHub",
    icon: <Github size={24} className="text-black" />,
    level: 80,
  },
];

export const projects: Project[] = [
  {
    title: "Seed Faith Basic School Result Management Portal",
    description: "A production school-management platform handling everything from student records to result publishing. It runs distinct dashboards for administrators, form masters, principals, and parents, with automated result compilation, approval workflows, PDF report generation, and real-time announcements.",
    image: "/projects/admin.png",
    images: ["/projects/admin.png", "/projects/principal.png"],
    link: "PASTE_YOUR_LIVE_LINK_HERE",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Tailwind CSS", "Puppeteer", "Cloudinary"],
    isPersonal: true,
  },
  {
    title: "Water Delivery Management System",
    description: "Developed a water management system for a water delivery company to streamline delivery operations, track customer orders, and manage distribution activities, featuring a mobile frontend for customers and a web application for administrative management.",
    image: "/assets/projects/h2o.png",
    link: "https://github.com/esele67/H2O-app.git",
    github: "https://github.com/esele67/H2O-app.git",
    tech: ["React.js", "React Native", "Node.js", "Express", "MongoDB"],
    isPersonal: false,
  },
  {
    title: "School Management System",
    description: "A web-based platform that streamlines school administration by managing student registration, attendance tracking, and exam score computation, helping automate academic records and administrative workflows.",
    image: "/assets/projects/ms.png",
    link: "https://github.com/esele67/School_Management_System.git",
    tech: ["Html", "Bootstrap", "Javascript", "PHP", "MySql"],
    isPersonal: false,
  },
  {
    title: "Student Performance Tracker AI system",
    description: "Designed and developed an intelligent student performance monitoring system that analyzes academic data to detect trends, predict risk levels, and generate visual performance reports.",
    image: "/assets/projects/stu-web.png",
    link: "https://student-performance-ai-prediction-analytics.streamlit.app/",
    github: "https://github.com/esele67/student-performance-ai.git",
    tech: ["Python"],
    isPersonal: true,
  },
  {
    title: "Interview-Pro ",
    description: "InterviewPro is a technical interview preparation web app that helps software engineering candidates track learning, practice coding problems, prepare behavioral answers, and log interviews in one place. Built with React, it runs entirely in the browser using localStorage, requiring no backend while supporting offline use and user-specific progress tracking.",
    image: "/assets/projects/ip.png",
    link: "https://interview-pro-one.vercel.app/",
    github: "https://github.com/esele67/Interview-Pro",
    tech: ["React.js", "JavaScript", "LocalStorage"],
    isPersonal: true,
  },
  {
    title: "AI-powered Resume Analyzer ",
    description: "Developed an AI-powered Resume Analyzer web application that evaluates resumes against job descriptions, scores ATS compatibility, highlights matched/missing keywords, and provides actionable optimization suggestions. Built with Python, Streamlit, NLTK, and scikit-learn for interactive, research-grade resume analysis.",
    image: "/assets/projects/ai-rs.png",
    link: "https://ai-resume-analyzer-mn8l.onrender.com/",
    github: "https://github.com/esele67/ai-resume-analyzer",
    tech: ["JavaScript", "Python", "Streamlit", "NLTK"],
    isPersonal: true,
  },
  {
    title: "Nexeon Tech Solutions website",
    description: "Developed a responsive corporate website incorporating SEO best practices to enhance organic traffic and brand visibility.",
    image: "/assets/projects/nexeon.png",
    link: "https://nexeon-web.vercel.app/",
    github: "https://github.com/esele67/Nexeon-website.git",
    tech: ["React.js", "CSS", "JavaScript"],
    isPersonal: false,
  },
];

export const services: Service[] = [
  {
    icon: <Layout size={48} className='text-indigo-600' />,
    title: "Custom Web Development",
    description: "Bespoke web solutions tailored to your specific business needs and requirements.",
    features: ["Custom Design", "Scalable Architecture", "Modern Frameworks", "SEO Optimized"],
    isPopular: false
  },
  {
    icon: <Globe size={48} className='text-indigo-600' />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your site works perfectly on all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Fast Loading"],
    isPopular: true
  },
  {
    icon: <Code size={48} className='text-indigo-600' />,
    title: "Single & Multi-Page Applications",
    description: "Modern SPAs and traditional multi-page websites built with the latest technologies.",
    features: ["React/Next.js", "Performance Optimized", "Interactive UI"],
    isPopular: false
  },
  {
    icon: <ShoppingCart size={48} className='text-indigo-600' />,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard", "Analytics"],
    isPopular: false
  },
  {
    icon: <Server size={48} className='text-indigo-600' />,
    title: "Backend & API Integration",
    description: "Robust backend systems and seamless API integrations to power your web applications.",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security"],
    isPopular: false
  }
];