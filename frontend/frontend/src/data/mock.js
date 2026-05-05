const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Initial data structure (will be populated from API)
export let portfolioData = {
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
  projects: [],
  education: []
};

// Function to fetch portfolio data from API
export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    const result = await response.json();
    if (result.success) {
      portfolioData = { ...portfolioData, ...result.data };
      return result.data;
    }
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
  return portfolioData;
};

// Function to submit contact form to API
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      return { success: true, data: result.data };
    } else {
      return { success: false, errors: result.errors || [result.error] };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Server connection failed" };
  }
};