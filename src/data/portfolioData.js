export const personalInfo = {
  name: "Mesfin Aragaw",
  title: "Full Stack Developer",
  tagline: "Transforming ideas into powerful digital solutions",
  bio: "I'm a passionate Full Stack Developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, and cloud technologies — crafting clean code and intuitive user experiences that make a real impact.",
  email: "mesfinaragaw36@gmail.com",
  phone: "+251918401378",
  location: "Addis Abeba, Ethiopia",
  github: "https://github.com/mesfinaragaw36-blip",
  linkedin: "https://linkedin.com",
  telegram: "https://t.me",
  instagram: "https://instagram.com",
  cvLink: "#",
  available: true,
};

export const skills = {
  frontend: [
    { name: "HTML5", level: 95, icon: "html" },
    { name: "CSS3", level: 92, icon: "css" },
    { name: "JavaScript", level: 80, icon: "js" },
    { name: "TypeScript", level: 60, icon: "ts" },
    { name: "React.js", level: 80, icon: "react" },
    { name: "Next.js", level: 70, icon: "next" },
    { name: "Tailwind CSS", level: 70, icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", level: 80, icon: "node" },
    { name: "Express.js", level: 80, icon: "express" },
    { name: "MongoDB", level: 10, icon: "mongo" },
    { name: "MySQL", level: 80, icon: "mysql" },
    { name: "Firebase", level: 50, icon: "firebase" },
    { name: "REST APIs", level: 80, icon: "api" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "git" },
    { name: "Figma", level: 10, icon: "figma" },
    { name: "VS Code", level: 95, icon: "vscode" },
    { name: "Postman", level: 80, icon: "postman" },
    { name: "Docker", level: 10, icon: "docker" },
    { name: "Linux", level: 10, icon: "linux" },
  ],
};

export const projects = [

  {
    id: 1,
    title: "My Portfolio",
    description: "A passionate web developer focused on building responsive and user-friendly websites and applications with modern technologies.",
    image: "/m4.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://mesfin-a.netlify.app",
    githubUrl:"https://github.com/mesfinaragaw36-blip/My-portfolio",
    featured: false,
  },
    {
    id:2,
    title: "Apple Website",
    description: "This is a modern Apple-inspired frontend website built with a clean and minimal UI design. It showcases Apple products with smooth layout, responsive design, and user-friendly navigation. The page focuses on delivering a premium visual experience similar to Apple official website style.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    tags: ["HTML", "CSS"],
    category: "frontend",
    liveUrl: "https://appweb-2.netlify.app",
    githubUrl: "https://github.com/mesfinaragaw36-blip/Apple_website_Demo",
    featured: false,
  },

  {
    id: 4,
    title: "puppy lovers",
    description: "A joyful space for puppy lovers to explore cute moments, learn, and celebrate their furry friends.” 🐶✨",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    tags: ["HTML", "CSS"],
    category: "frontend",
    liveUrl: "https://puppy-2.netlify.app",
    githubUrl: "https://github.com/mesfinaragaw36-blip/puppy-lovers",
    featured: true,
  },
      {
    id:5,
    title: "Cafe Managment System",
    description: "A responsive frontend cafe management system featuring menu display, ordering interface, and smooth user experience. Built with a modern UI stack for performance and scalability.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    tags: ["HTML","Css", "javascript",],
    category: "frontend",
    liveUrl: "https://cafe-2.netlify.app",
    githubUrl: "https://github.com/mesfinaragaw36-blip/cafe-3",
    featured: true,
  },

  {
    id: 6,
    title: "library Management System",
    description: "A Library Management System is a software application designed to efficiently manage library operations such as book cataloging, member registration, borrowing, and returns. It helps librarians and users easily search, track, and organize library resources in a fast and systematic way.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    tags: ["HTML", "CSS", "Javascript","PHP"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    // company: "Tech Solutions Inc.",
    period: "2018 – Present",
    description: "Worked as an intermediate full-stack developer, building and maintaining web applications, handling both frontend and backend tasks, and collaborating with the team to improve system performance and user experience.",
    tags: ["HTML","CSS","Javascript","Tailwind","React", "Node.js", "Mysql"],
    icon: "💼",
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer",
    // company: "Digital Innovations Agency",
    period: "2018 – Present",
    description: "Built responsive web applications for some client. Specialized in React and modern CSS, improving user engagement by 35% through performance optimizations.",
    tags: ["HTML","CSS","Javascript","React", "Tailwind","Bootstrap"],
    icon: "🖥️",
  },
  {
    id: 3,
    type: "work",
    title: "Software Engineer",
    // company: "StartupHub",
    period: "2018 – Present",
    description: "Worked as an intermediate software developer, developing and maintaining web features, collaborating with team members on projects, and improving software performance and user experience.",
    tags: ["HTML","CSS","JavaScript", "React", "Node.js", "REST APIs"],
    icon: "🚀",
  },
  {
    id: 4,
    type: "education",
    title: "B.Sc. Computer Science",
    company: "university of wollo,kombolcha campus",
    period: "2016 – 2019",
    description: "Studying Computer Science (Batch of 2016). Focused on software engineering, algorithms, and web technologies. Active in coding practice and continuously improving problem-solving and programming skills.",
    tags: ["Algorithms", "Data Structures", "Software Engineering"],
    icon: "🎓",
  },
];

// export const certifications = [
//   { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2023" },
//   { name: "Meta Front-End Developer Certificate", issuer: "Meta / Coursera", year: "2022" },
//   { name: "MongoDB Developer Certification", issuer: "MongoDB University", year: "2022" },
//   { name: "Google UX Design Certificate", issuer: "Google / Coursera", year: "2021" },
// ];

export const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks, optimized for performance, SEO, and scalability.",
    features: ["React / Next.js", "Node.js / Express", "Database Design", "API Integration"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the core. From wireframes to pixel-perfect implementations.",
    features: ["Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    icon: "⚡",
    title: "API Development",
    description: "Robust, secure, and well-documented REST and GraphQL APIs that power your applications and integrations.",
    features: ["REST APIs", "Authentication", "Documentation"],
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first websites that look and perform flawlessly across all devices, screen sizes, and browsers.",
    features: ["Mobile-First", "Cross-Browser", "Performance",],
  },
];

// export const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CEO, TechStart",
//     avatar: "https://i.pravatar.cc/100?img=1",
//     text: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail, clean code, and stunning UI made our product stand out. Highly recommended!",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "CTO, DataFlow",
//     avatar: "https://i.pravatar.cc/100?img=3",
//     text: "Working with Alex was a fantastic experience. The dashboard he built is incredibly fast and intuitive. Our team's productivity increased by 60% after deployment.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Product Manager, EduTech",
//     avatar: "https://i.pravatar.cc/100?img=5",
//     text: "The LMS platform Alex built for us is world-class. Clean architecture, beautiful design, and delivered on time. Our students love the experience.",
//     rating: 5,
//   },
// ];

export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];
