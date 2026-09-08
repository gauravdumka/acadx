export const institutionData = {
  profile: {
    name: "National Institute of Technology",
    role: "Institution",
    avatar: "https://ui-avatars.com/api/?name=NIT&background=C4ED75&color=000&font-size=0.4",
    location: "Surathkal, India",
    adminName: "Dr. R. K. Sharma",
    established: 1960,
  },
  kpis: {
    totalStudents: 4250,
    verifiedSkillsPct: 68,
    averageReadiness: 72,
    industryPartners: 45,
    activeInternships: 320,
    placementReadiness: 76
  },
  skillDistribution: [
    { name: "JavaScript", selfDeclared: 820, verified: 650, percentage: 82 },
    { name: "Python", selfDeclared: 950, verified: 580, percentage: 71 },
    { name: "SQL", selfDeclared: 810, verified: 420, percentage: 64 },
    { name: "React", selfDeclared: 620, verified: 310, percentage: 51 },
    { name: "Node.js", selfDeclared: 480, verified: 210, percentage: 43 },
    { name: "Java", selfDeclared: 890, verified: 450, percentage: 68 },
    { name: "C++", selfDeclared: 1100, verified: 720, percentage: 85 }
  ],
  skillGaps: [
    { 
      name: "Cloud Computing", 
      gapPercentage: 62, 
      description: "of target students below required proficiency",
      priority: "High"
    },
    { 
      name: "System Design", 
      gapPercentage: 54, 
      description: "of final year students lack architectural experience",
      priority: "High"
    },
    { 
      name: "Docker/Kubernetes", 
      gapPercentage: 48, 
      description: "below target proficiency for backend roles",
      priority: "Medium"
    },
    { 
      name: "TypeScript", 
      gapPercentage: 41, 
      description: "below target proficiency for frontend roles",
      priority: "Medium"
    }
  ],
  industryAlignment: [
    { skill: "Python", demand: 85, supply: 72, gap: 13 },
    { skill: "SQL", demand: 78, supply: 61, gap: 17 },
    { skill: "Cloud (AWS/Azure)", demand: 70, supply: 39, gap: 31 },
    { skill: "React", demand: 64, supply: 51, gap: 13 },
    { skill: "Docker", demand: 58, supply: 29, gap: 29 },
    { skill: "Machine Learning", demand: 52, supply: 22, gap: 30 }
  ],
  departmentReadiness: [
    { name: "Computer Science", readiness: 78, students: 850 },
    { name: "Information Technology", readiness: 74, students: 720 },
    { name: "Electronics", readiness: 61, students: 910 },
    { name: "Mechanical", readiness: 54, students: 880 },
    { name: "Civil", readiness: 45, students: 650 }
  ],
  recentActivity: [
    {
      id: 1,
      type: "verification",
      message: "45 students successfully verified React skills via TechNova Assessment",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "opportunity",
      message: "New internship drive opened by DigitalWorks for IT department",
      time: "5 hours ago"
    },
    {
      id: 3,
      type: "collaboration",
      message: "Cloud Architecture Workshop scheduled with AWS for final years",
      time: "1 day ago"
    }
  ]
};
