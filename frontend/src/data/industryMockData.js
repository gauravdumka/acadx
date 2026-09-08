export const industryData = {
  profile: {
    name: "TechNova Solutions",
    role: "Industry Partner",
    avatar: "https://i.pravatar.cc/150?u=technova",
    industry: "Information Technology",
    location: "Bangalore, India",
    activeJobs: 12,
    activeInternships: 5,
    totalHires: 142,
  },
  overview: {
    newApplications: 48,
    shortlisted: 12,
    interviewsScheduled: 8,
    offersExtended: 3,
  },
  activeOpportunities: [
    {
      id: 1,
      title: "Frontend Developer (React)",
      type: "Full-time",
      location: "Bangalore (Hybrid)",
      applicants: 124,
      shortlisted: 8,
      postedDate: "2 days ago",
      requiredSkills: ["React", "JavaScript", "Redux"],
      preferredSkills: ["TypeScript", "Next.js"],
      status: "Active"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      type: "Internship",
      location: "Remote",
      applicants: 86,
      shortlisted: 4,
      postedDate: "5 days ago",
      requiredSkills: ["Figma", "Prototyping", "User Research"],
      preferredSkills: ["CSS", "Framer"],
      status: "Active"
    },
    {
      id: 3,
      title: "Backend Engineer",
      type: "Full-time",
      location: "Bangalore",
      applicants: 210,
      shortlisted: 15,
      postedDate: "1 week ago",
      requiredSkills: ["Node.js", "Express", "MongoDB"],
      preferredSkills: ["AWS", "Docker"],
      status: "Active"
    }
  ],
  skillDemand: [
    { name: "React", demand: "High", candidates: 1450 },
    { name: "Node.js", demand: "High", candidates: 890 },
    { name: "TypeScript", demand: "Medium", candidates: 520 },
    { name: "Figma", demand: "Medium", candidates: 340 },
    { name: "AWS", demand: "Low", candidates: 210 },
  ],
  talentDiscovery: [
    {
      id: 1,
      name: "Amit Bhatt",
      college: "National Institute of Technology",
      branch: "Computer Science",
      year: "2026",
      matchScore: 92,
      matchedSkills: ["React", "JavaScript"],
      missingSkills: ["TypeScript"],
      avatar: "https://i.pravatar.cc/150?u=amit"
    },
    {
      id: 2,
      name: "Priya Sharma",
      college: "IIT Bombay",
      branch: "Information Technology",
      year: "2025",
      matchScore: 88,
      matchedSkills: ["Node.js", "MongoDB"],
      missingSkills: ["AWS"],
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
      id: 3,
      name: "Rahul Verma",
      college: "Delhi Technological University",
      branch: "Software Engineering",
      year: "2026",
      matchScore: 85,
      matchedSkills: ["React", "CSS"],
      missingSkills: ["Redux"],
      avatar: "https://i.pravatar.cc/150?u=rahul"
    }
  ],
  collaboration: [
    {
      id: 1,
      type: "Faculty Development Program",
      topic: "Modern Cloud Architecture",
      institution: "NIT Surathkal",
      status: "Upcoming",
      date: "Oct 20, 2026"
    },
    {
      id: 2,
      type: "Industry Training",
      topic: "React Native Bootcamp",
      institution: "VIT Vellore",
      status: "Ongoing",
      date: "Oct 10-25, 2026"
    }
  ],
  funnelAnalytics: [
    { name: 'Applied', value: 420 },
    { name: 'Reviewed', value: 180 },
    { name: 'Shortlisted', value: 45 },
    { name: 'Interviewed', value: 20 },
    { name: 'Offered', value: 5 },
  ]
};
