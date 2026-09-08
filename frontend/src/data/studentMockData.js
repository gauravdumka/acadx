export const studentData = {
  profile: {
    name: "Amit Bhatt",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?u=amit",
    college: "National Institute of Technology",
    degree: "B.Tech in Computer Science",
    branch: "Computer Science and Engineering",
    graduationYear: "2026",
    completionPercentage: 72,
    bio: "Passionate computer science student looking for opportunities in frontend web development and user experience design. Proficient in React and modern JavaScript.",
  },
  readiness: {
    overall: 78,
    breakdown: [
      { category: 'Technical Skills', score: 84 },
      { category: 'Soft Skills', score: 72 },
      { category: 'Industry Exposure', score: 65 },
      { category: 'Profile Strength', score: 80 },
    ],
    statusText: "You're on the right track!",
    explanation: "Improving your industry exposure and testing skills can increase your readiness score."
  },
  skills: [
    { name: "JavaScript", progress: 92 },
    { name: "React", progress: 88 },
    { name: "Git", progress: 82 },
    { name: "HTML/CSS", progress: 90 },
    { name: "Communication", progress: 76 }
  ],
  skillGaps: [
    { name: "TypeScript", current: 55, required: 80, priority: "High" },
    { name: "Testing (Jest)", current: 40, required: 75, priority: "Medium" },
    { name: "System Design", current: 30, required: 65, priority: "Medium" },
    { name: "Communication", current: 76, required: 85, priority: "Low" }
  ],
  careers: [
    {
      title: "Frontend Developer",
      match: 92,
      description: "Build user interfaces and highly responsive web applications using React and modern CSS.",
      requiredSkills: ["React", "JavaScript", "Git", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      match: 84,
      description: "Work on both frontend and backend technologies, managing databases and APIs.",
      requiredSkills: ["React", "Node.js", "Database", "APIs"]
    },
    {
      title: "Backend Developer",
      match: 76,
      description: "Focus on server-side logic, database management, and building robust APIs.",
      requiredSkills: ["Node.js", "Express", "MongoDB", "APIs"]
    }
  ],
  opportunities: [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechNova",
      location: "Remote",
      duration: "6 Months",
      type: "Internship",
      match: 94,
      skills: ["React", "JavaScript", "Git"]
    },
    {
      id: 2,
      title: "Frontend Project",
      company: "DigitalWorks",
      location: "Hybrid",
      duration: "Flexible",
      type: "Industry Project",
      match: 89,
      skills: ["React", "UI/UX", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "InnovateLabs",
      location: "Bangalore",
      duration: "3 Months",
      type: "Internship",
      match: 82,
      skills: ["Java", "SQL", "Git"]
    }
  ],
  learningRecommendations: [
    {
      title: "Advanced React Patterns",
      difficulty: "Intermediate",
      duration: "4 weeks",
      reason: "Improve your frontend development skills."
    },
    {
      title: "TypeScript Fundamentals",
      difficulty: "Beginner",
      duration: "2 weeks",
      reason: "Recommended based on your skill gap."
    },
    {
      title: "Software Testing with Jest",
      difficulty: "Intermediate",
      duration: "3 weeks",
      reason: "Frequently required for your target roles."
    }
  ],
  applications: [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechNova",
      status: "Under Review",
      dateApplied: "Oct 12, 2026"
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "InnovateLabs",
      status: "Interview",
      dateApplied: "Oct 05, 2026"
    },
    {
      id: 3,
      role: "Industry Project",
      company: "DigitalWorks",
      status: "Completed",
      dateApplied: "Aug 15, 2026"
    }
  ],
  progressAnalytics: {
    history: [
      { month: 'Apr', score: 45 },
      { month: 'May', score: 52 },
      { month: 'Jun', score: 58 },
      { month: 'Jul', score: 65 },
      { month: 'Aug', score: 71 },
      { month: 'Sep', score: 78 }
    ],
    stats: {
      assessmentsCompleted: 3,
      skillsImproved: 8,
      applicationsSent: 12,
      opportunitiesMatched: 24
    }
  }
};
