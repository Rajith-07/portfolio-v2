export const profile = {
  name: "Rajith S",
  role: "Software Engineer",
  headline: "Building scalable systems, cloud-native platforms, and intelligent software.",
  brand: "Engineer focused on building scalable systems, cloud-native applications, and intelligent software.",
  location: "Chennai, India",
  email: "rajithsrr@gmail.com",
  github: "https://github.com/Rajith-07",
  linkedin: "https://www.linkedin.com/in/rajith--s",
  leetcode: "https://leetcode.com/u/rajiths/",
  resume: "https://rajith.dev/Rajith_S.pdf",
  site: "https://rajith.dev",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export const skillGroups = [
  { category: "Programming", skills: ["C++", "Python", "Dart", "JavaScript", "Java", "C", "SQL"] },
  { category: "Cloud", skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "CloudWatch", "CloudFront", "AWS Lambda", "API Gateway", "DynamoDB", "Step Functions", "SES", "RDS"] },
  { category: "DevOps", skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Jenkins", "GitLab"] },
  { category: "Networking", skills: ["Computer Networks", "VPC", "Zigbee", "Geofencing", "Distributed device streams", "Linux fundamentals"] },
  { category: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite", "Supabase"] },
  { category: "AI & ML", skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "Pandas", "NumPy", "Deep Learning", "Rekognition"] },
  { category: "Tools", skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Flutter", "VS Code", "Google Maps API", "REST APIs", "Razorpay"] },
  { category: "Operating Systems", skills: ["Linux fundamentals", "Operating Systems"] },
];

export const projects = [
  {
    slug: "chargeiq",
    name: "ChargeIQ",
    category: "Mobile + Cloud",
    summary: "Smart EV charging management system for charger discovery, availability, and routing.",
    problem: "EV drivers need fast charger discovery with location context, station availability, and navigation that remains responsive during network latency.",
    solution: "Architected a Flutter system with Google Maps, geolocation, Firebase sync, SQLite caching, REST pipelines, marker rendering, and route workflows.",
    impact: "Serves 60 stations with 99% faster lookup and keeps UI interactions under 100 ms during network delays.",
    technologies: ["Flutter", "Firebase", "SQLite", "Google Maps API", "Navigation SDK", "REST", "Dart"],
    github: "https://github.com/Rajith-07/ChargeIQ",
    demo: "",
    featured: true,
  },
  {
    slug: "base-camp",
    name: "Smart Employee Onboarding Identity Service",
    category: "Serverless AWS",
    summary: "AWS-based identity verification and stage-based employee onboarding workflow.",
    problem: "Employee onboarding requires coordinated identity verification, approvals, secure document delivery, notifications, and reliable state transitions.",
    solution: "Built a token-based serverless workflow with Lambda, API Gateway, Step Functions, S3, CloudFront, SES, and DynamoDB.",
    impact: "Reduced manual handoffs by 85%, handled 10,000+ events with fault-isolated execution, and improved delivery reliability to 99.9% for 5000+ users.",
    technologies: ["AWS Lambda", "API Gateway", "Step Functions", "S3", "CloudFront", "DynamoDB", "SES", "HTML"],
    github: "https://github.com/Rajith-07/Base-Camp",
    demo: "",
    featured: true,
  },
  {
    slug: "smart-toll",
    name: "Smart Toll System",
    category: "IoT + Distributed Systems",
    summary: "Distributed tolling with embedded devices, geofence preprocessing, and backend ingestion.",
    problem: "Distance-based tolling needs real-time device decisions, resilient event ingestion, and duplicate-safe backend processing.",
    solution: "Built ESP32 and Zigbee device flows with React, Node.js, Express.js, PostgreSQL, Supabase, Razorpay, Vercel, geofence preprocessing, and idempotent REST ingestion.",
    impact: "Calculates fares for 100+ devices in real time, reduces backend calls by 99.8%, reaches 5 ms location decision latency, and processes 10,000+ async events without duplicates.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "ESP32", "Zigbee", "Razorpay", "Vercel", "TypeScript"],
    github: "https://github.com/Rajith-07/smart-toll",
    demo: "",
    featured: true,
  },
  {
    slug: "sentry",
    name: "Sentry",
    category: "Serverless AI",
    summary: "Serverless attendance system with face recognition based on AWS.",
    problem: "Attendance workflows need secure identity capture and automated processing without heavyweight infrastructure.",
    solution: "Built face-attendance workflows with Rekognition, Lambda, Step Functions, API Gateway, and DynamoDB patterns.",
    impact: "Supports event-driven attendance processing with managed AWS services.",
    technologies: ["AWS", "Rekognition", "Lambda", "Step Functions", "API Gateway", "DynamoDB", "HTML"],
    github: "https://github.com/Rajith-07/Sentry",
    demo: "",
    featured: false,
  },
  {
    slug: "algoflow",
    name: "AlgoFlow",
    category: "Microservices",
    summary: "Remote code execution platform based on microservices.",
    problem: "Code execution platforms require isolated execution, routing, and service boundaries.",
    solution: "Built a Python-based remote code execution platform with a microservices-oriented architecture.",
    impact: "Demonstrates backend systems design for code execution workflows.",
    technologies: ["Python", "Microservices", "Remote Code Execution"],
    github: "https://github.com/Rajith-07/AlgoFlow",
    demo: "",
    featured: false,
  },
  {
    slug: "ecg-arrhythmia",
    name: "ECG-Based Arrhythmia Classification",
    category: "Machine Learning",
    summary: "Comparative study of machine learning and deep learning models for ECG arrhythmia classification.",
    problem: "ECG signal classification requires careful preprocessing, model comparison, and interpretable evaluation.",
    solution: "Implemented ML and deep learning experimentation using notebook-based workflows.",
    impact: "Explores healthcare-oriented signal classification with comparative modeling.",
    technologies: ["Jupyter Notebook", "PyTorch", "scikit-learn", "NumPy", "Matplotlib"],
    github: "https://github.com/Rajith-07/ECG-Based-Arrhythmia-Classification",
    demo: "",
    featured: true,
  },
  {
    slug: "stochastic-derivatives",
    name: "Stochastic Derivatives Pricing Engine",
    category: "Quantitative Systems",
    summary: "Quantitative derivatives pricing framework for Black–Scholes, Monte Carlo, Greeks, diagnostics, and exotic options.",
    problem: "Pricing engines need analytical valuation, simulation, convergence checks, and risk-neutral assumptions in one coherent workflow.",
    solution: "Implemented analytical Black–Scholes valuation, Monte Carlo simulation, variance reduction, Greeks estimation, convergence diagnostics, and exotic option pricing.",
    impact: "Shows numerical computing and simulation-heavy backend thinking in Python.",
    technologies: ["Python", "Monte Carlo", "Black–Scholes", "Numerical Computing"],
    github: "https://github.com/Rajith-07/Stochastic-Derivatives-Pricing-Engine",
    demo: "",
    featured: false,
  },
];

export const experience = [
  {
    title: "AWS Cloud Intern",
    org: "F13 Technologies",
    period: "Feb 2026 – Present",
    type: "Internship",
    summary: "Designed AWS migration and serverless workflow architecture for production-oriented business systems.",
    points: [
      "Designed an AWS migration plan for an e-commerce platform using EC2, RDS, S3, and CloudFront, targeting 40% infrastructure cost reduction.",
      "Built serverless onboarding and face-attendance workflows with Rekognition, Lambda, Step Functions, API Gateway, and DynamoDB.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "YugaYatra Retail (OPC) Pvt. Ltd.",
    period: "Nov 2025 – Jan 2026",
    type: "Internship",
    summary: "Developed web applications using React, Node.js, and MongoDB.",
    points: ["Built full-stack web application features with React, Node.js, and MongoDB."],
  },
  {
    title: "President",
    org: "Intel IoT Club",
    period: "Feb 2025 – Sep 2025",
    type: "Leadership",
    summary: "Led cross-domain build sprints, partnerships, and research pods focused on AI for IoT.",
    points: ["Managed build sprints and club direction across embedded, cloud, and AI learning tracks."],
  },
  {
    title: "Co-Lead",
    org: "Intel IoT Club",
    period: "Jun 2024 – Jan 2025",
    type: "Leadership",
    summary: "Designed learning roadmaps and mentored cohorts on embedded and cloud stacks.",
    points: ["Introduced rapid prototyping practices for embedded + cloud projects."],
  },
];

export const education = [
  {
    school: "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – Expected 2027",
    detail: "CGPA 9.02/10",
  },
];

export const research = [
  {
    title: "Deep Learning Architectures for Skin Lesion Classification",
    subtitle: "A Comparative Study of CNN, Transformer and Hybrid Models",
    venue: "ICISCoIS 2026: 2nd International Conference, Coimbatore, India",
    doi: "10.1109/ICISCoIS62701.2026.11447666",
    href: "https://doi.org/10.1109/ICISCoIS62701.2026.11447666",
    area: "AI + Healthcare",
  },
  {
    title: "ECG-Based Arrhythmia Classification",
    subtitle: "A comparative study of machine learning and deep learning models",
    venue: "GitHub research project",
    doi: "",
    href: "https://github.com/Rajith-07/ECG-Based-Arrhythmia-Classification",
    area: "Signal Processing + ML",
  },
];

export const certifications = ["AWS Certified Cloud Practitioner", "Cisco Certified Network Associate"];

export const principles = [
  "Design for failure before optimizing for speed.",
  "Prefer explicit system boundaries over accidental coupling.",
  "Treat cloud, networking, data, and UX as one product surface.",
  "Move from prototype to production with observability, security, and deployment in mind.",
];
