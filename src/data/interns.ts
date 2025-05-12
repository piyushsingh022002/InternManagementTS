export interface Intern {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  startDate: string;
  photo: string;
  bio: string;
  skills: string[];
  projects: string[];
  mentor: string;
}

export const interns: Intern[] = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@company.com",
    department: "Engineering",
    role: "Frontend Developer Intern",
    startDate: "2025-01-15",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Computer Science student with a passion for creating intuitive user interfaces and seamless user experiences.",
    skills: ["React", "TypeScript", "CSS", "UI/UX"],
    projects: ["Company Website Redesign", "Internal Dashboard"],
    mentor: "Sarah Williams"
  },
  {
    id: 2,
    name: "Maya Patel",
    email: "maya.patel@company.com",
    department: "Design",
    role: "UI/UX Design Intern",
    startDate: "2025-02-01",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Design student focused on creating accessible and beautiful digital experiences.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    projects: ["Mobile App Redesign", "Design System"],
    mentor: "David Chen"
  },
  {
    id: 3,
    name: "Jamal Wilson",
    email: "jamal.wilson@company.com",
    department: "Data Science",
    role: "Data Analyst Intern",
    startDate: "2025-01-10",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Statistics major with a knack for finding patterns in complex datasets and visualizing insights.",
    skills: ["Python", "R", "SQL", "Data Visualization"],
    projects: ["Customer Segmentation", "Sales Prediction Model"],
    mentor: "Lisa Rodriguez"
  },
  {
    id: 4,
    name: "Emma Chen",
    email: "emma.chen@company.com",
    department: "Marketing",
    role: "Digital Marketing Intern",
    startDate: "2025-02-15",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    bio: "Marketing student specializing in digital campaigns and social media strategy.",
    skills: ["Social Media", "Content Creation", "Analytics", "SEO"],
    projects: ["Q1 Social Media Campaign", "Email Marketing Automation"],
    mentor: "Michael Thompson"
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@company.com",
    department: "Engineering",
    role: "Backend Developer Intern",
    startDate: "2025-01-05",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Computer Engineering student with a focus on scalable backend systems and API design.",
    skills: ["Node.js", "Express", "MongoDB", "API Design"],
    projects: ["API Gateway Implementation", "Database Optimization"],
    mentor: "Jennifer Lee"
  },
  {
    id: 6,
    name: "Sophia Kim",
    email: "sophia.kim@company.com",
    department: "Product",
    role: "Product Management Intern",
    startDate: "2025-02-10",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    bio: "Business and Technology student passionate about bridging the gap between user needs and technical solutions.",
    skills: ["Product Strategy", "User Stories", "Market Research", "Agile"],
    projects: ["Feature Prioritization Framework", "User Feedback System"],
    mentor: "Robert Jackson"
  },
  {
    id: 7,
    name: "Tyler Smith",
    email: "tyler.smith@company.com",
    department: "Engineering",
    role: "DevOps Intern",
    startDate: "2025-01-20",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "IT student focused on automating deployment processes and improving system reliability.",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    projects: ["Deployment Pipeline Automation", "Monitoring System Setup"],
    mentor: "Amanda Garcia"
  },
  {
    id: 8,
    name: "Zoe Williams",
    email: "zoe.williams@company.com",
    department: "HR",
    role: "HR Operations Intern",
    startDate: "2025-02-05",
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "Human Resources student with an interest in improving employee experience and organizational development.",
    skills: ["Recruitment", "Employee Relations", "HRIS", "Onboarding"],
    projects: ["Onboarding Process Redesign", "Employee Satisfaction Survey"],
    mentor: "Thomas Wilson"
  }
];
