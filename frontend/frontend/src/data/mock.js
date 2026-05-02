// Mock data for Smit Polra Portfolio

export const portfolioData = {
  personal: {
    name: "Smit Polra",
    title: "AI + Front End Developer",
    email: "polarasmit2504@gmail.com",
    phone: "+91 9484644726",
    address: "26, Nijanand Society, A.K Road, Varachha, Surat",
    github: "https://github.com/sampol2288",
    resumeUrl: "/resume.pdf"
  },
  
  about: {
    summary: "Motivated Front End Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. Currently pursuing BCA while specializing in building responsive, user-friendly web interfaces with modern frameworks. Passionate about integrating AI capabilities into web applications to create intelligent, interactive user experiences. Focused on clean code, component-based architecture, and delivering pixel-perfect designs that enhance user engagement.",
    highlight: "I'm deeply interested in React and AI-based interfaces, constantly exploring ways to blend cutting-edge AI technology with intuitive frontend design."
  },
  
  skills: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 85 }
    ],
    practices: [
      "Component-based Architecture",
      "Responsive Design",
      "Version Control (Git)",
      "Clean UI Implementation",
      "AI-Integrated Interfaces",
      "Reusable Components"
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "Satshree Steel",
      description: "A professional business website for a steel manufacturing company. Built with modern frontend technologies featuring responsive design, smooth animations, and clean user interface.",
      tech: ["React.js", "CSS3", "Responsive Design"],
      liveUrl: "https://satshreesteel.in/",
      featured: true
    },
    {
      id: 2,
      name: "SAM Portfolio",
      description: "A creative portfolio website showcasing modern web development techniques with interactive elements and smooth user experience.",
      tech: ["React.js", "JavaScript", "CSS3"],
      liveUrl: "https://sam-three-phi.vercel.app/",
      featured: true
    },
    {
      id: 3,
      name: "Admin Dashboard",
      description: "A comprehensive admin panel interface with data visualization, user management, and responsive layout for efficient content management.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      liveUrl: "https://admin-puce-one-52.vercel.app/",
      featured: true
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bhagwan Mahavir University",
      period: "2023 – 2026",
      status: "Pursuing"
    },
    {
      id: 2,
      degree: "Computer Operator And Programming Assistant (GCVT)",
      institution: "Industrial Training Institute (ITI)",
      period: "2020 – 2023",
      status: "Completed"
    },
    {
      id: 3,
      degree: "Information Communication Technology System Maintenance (NSQF)",
      institution: "Industrial Training Institute (ITI)",
      period: "2021 – 2022",
      status: "Completed"
    }
  ]
};

// Mock function to simulate contact form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock form submission:", formData);
      // Store in browser localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};