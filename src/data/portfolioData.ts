export interface SkillItem {
  id: string;
  name: string;
  category: 'technical' | 'non-technical';
  subcategory?: string;
  level?: string;
  icon?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeTag: string;
  credlyUrl: string;
  category: 'Cisco' | 'Fortinet' | 'IBM' | 'Specialization';
  accentColor: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  event: string;
  year: string;
  award: string;
  description: string;
  technologies: string[];
}

export type ProjectType = 'web' | 'application' | 'game' | 'bot' | 'api' | 'hardware';
export type ProjectStatus = 'completed' | 'in-progress';

export interface ProjectItem {
  id: string;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  languages: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  hasPreview: boolean;
  featured?: boolean;
}

export interface AcademicRecord {
  id: string;
  level: string;
  degree: string;
  institution: string;
  year: string;
  status: string;
  scoreOrGpa?: string;
  description: string;
  highlights: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  role: string;
  year: string;
  image: string;
  description: string;
  abstract: string;
  methodology: string;
  keywords: string[];
  paperUrl?: string;
  hasLink: boolean;
}

export interface FeedbackItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  jobTitle: string;
  languageTag: string;
  productivityBoost: string;
  testimonial: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

/* =========================================================================
   PORTFOLIO DATA STORE (PURE TYPESCRIPT — ZERO EXTERNAL JSON DEPENDENCY)
   ========================================================================= */

export const PERSONAL_INFO = {
  name: "Christian Jaye M. Fernan",
  preferredName: "Christian Jaye",
  tagline: "Computer Engineering & AI/ML Specialist",
  location: "Admacor St, Maguikay, Mandaue City, Cebu, Philippines",
  email: "christianjaye324@gmail.com",
  backupEmail: "christianjayefernan@gmail.com",
  phone: "+63 926 456 0070",
  linkedin: "https://www.linkedin.com/in/christian-jaye-fernan",
  github: "https://github.com",
  credly: "https://www.credly.com",
  currentRole: "CSR - English (one.com) | Systems & Hosting Support",
  academicStatus: "BTech CSE with AI/ML Specialization · 2nd Year (LPU)",
  bio: "Motivated Computer Engineering professional and AI enthusiast with hands-on expertise in technical support, low-level hardware diagnostics, PC/laptop architecture, and embedded IoT systems. Currently providing high-tier hosting, DNS, and PHP webspace solutions at one.com while engineering intelligent AI/ML and edge hardware prototypes.",
  avatar: "/assets/aistudio/image_bff97bd9.png",
  resumePdf: "/assets/aistudio/6_7ce2563a.pdf",
  credlyPdf: "/assets/aistudio/7_dbfd98ce.pdf",
};

export const METRICS = {
  clientSatisfaction: "99.4%",
  onTimeDelivery: "100%",
  averageRating: "4.9/5.0",
  happyClientsCount: "150+",
  certificationsCount: "12+",
  projectsCompleted: "18+",
};

// Easily expandable skills list
export const SKILLS_DATA: SkillItem[] = [
  // Technical Skills
  { id: "ts-1", name: "PC & Laptop Assembly", category: "technical", subcategory: "Hardware", level: "Expert" },
  { id: "ts-2", name: "Hardware Diagnostics & Repair", category: "technical", subcategory: "Hardware", level: "Expert" },
  { id: "ts-3", name: "Arduino Prototyping", category: "technical", subcategory: "IoT", level: "Advanced" },
  { id: "ts-4", name: "ESP32 & Raspberry Pi", category: "technical", subcategory: "IoT", level: "Advanced" },
  { id: "ts-5", name: "AI/ML Model Prototyping", category: "technical", subcategory: "AI", level: "Intermediate" },
  { id: "ts-6", name: "Python", category: "technical", subcategory: "Programming", level: "Advanced" },
  { id: "ts-7", name: "TypeScript & JavaScript", category: "technical", subcategory: "Programming", level: "Advanced" },
  { id: "ts-8", name: "C & C++", category: "technical", subcategory: "Embedded", level: "Proficient" },
  { id: "ts-9", name: "C#", category: "technical", subcategory: "Software", level: "Proficient" },
  { id: "ts-10", name: "Linux & Windows Systems", category: "technical", subcategory: "OS", level: "Expert" },
  { id: "ts-11", name: "DNS & PHP Web Hosting", category: "technical", subcategory: "Networking", level: "Expert" },
  { id: "ts-12", name: "Network Configuration", category: "technical", subcategory: "Networking", level: "Advanced" },
  { id: "ts-13", name: "3D Modeling (Tinkercad)", category: "technical", subcategory: "Design", level: "Proficient" },
  { id: "ts-14", name: "Canva & Photoshop", category: "technical", subcategory: "Design", level: "Proficient" },
  { id: "ts-15", name: "VS Code & Embedded IDEs", category: "technical", subcategory: "Tools", level: "Expert" },

  // Non-Technical Skills
  { id: "nts-1", name: "Customer Support & Empathy", category: "non-technical", level: "Mastery" },
  { id: "nts-2", name: "Issue De-escalation", category: "non-technical", level: "Mastery" },
  { id: "nts-3", name: "Analytical Problem Solving", category: "non-technical", level: "Advanced" },
  { id: "nts-4", name: "Technical Documentation", category: "non-technical", level: "Advanced" },
  { id: "nts-5", name: "English Verbal & Written Mastery", category: "non-technical", level: "Native / C2" },
  { id: "nts-6", name: "Rapid Learning Eagerness", category: "non-technical", level: "Mastery" },
  { id: "nts-7", name: "High Typing Speed (75+ WPM)", category: "non-technical", level: "Expert" },
  { id: "nts-8", name: "Active Listening", category: "non-technical", level: "Mastery" },
  { id: "nts-9", name: "Creative Engineering Mindset", category: "non-technical", level: "Advanced" },
  { id: "nts-10", name: "Cross-functional Collaboration", category: "non-technical", level: "Advanced" },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Verified foundational credential covering core operating system architectures, kernel processes, file systems, user access controls, and administrative maintenance on Windows and Linux.",
    badgeTag: "Cisco Verified",
    credlyUrl: "https://www.credly.com",
    category: "Cisco",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "cert-2",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Foundational networking principles including OSI 7-layer stack, TCP/IP protocol suite, IPv4/IPv6 subnetting, packet switching, routing, and network media standards.",
    badgeTag: "Cisco Verified",
    credlyUrl: "https://www.credly.com",
    category: "Cisco",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "cert-3",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Hands-on configuration of Cisco managed switches, routers, interface addressing, console hardening, SSH encryption, and VLAN segmentation.",
    badgeTag: "Cisco Verified",
    credlyUrl: "https://www.credly.com",
    category: "Cisco",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "cert-4",
    title: "FortiGate Operator v7.6 (NSE 3)",
    issuer: "Fortinet",
    date: "2024",
    description: "Comprehensive operational instruction on managing FortiGate next-generation firewalls, security profiles, firewall policies, SSL inspection, and traffic shaping.",
    badgeTag: "NSE 3 Exam",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-orange-500",
  },
  {
    id: "cert-5",
    title: "Technical Introduction to Cybersecurity v2.0 (NSE)",
    issuer: "Fortinet",
    date: "2024",
    description: "In-depth overview of security fabrics, zero-trust network access (ZTNA), secure SD-WAN architectures, and unified endpoint security systems.",
    badgeTag: "NSE Exam",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-orange-500",
  },
  {
    id: "cert-6",
    title: "Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    date: "2024",
    description: "Professional certification validating holistic cybersecurity operations, risk management strategies, incident containment, and SOC fundamentals.",
    badgeTag: "Associate Badge",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-rose-500",
  },
  {
    id: "cert-7",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    description: "Core concepts of information security, threat vectors, cryptography fundamentals, defensive security controls, and enterprise compliance.",
    badgeTag: "IBM SkillsBuild",
    credlyUrl: "https://www.credly.com",
    category: "IBM",
    accentColor: "from-indigo-600 to-blue-500",
  },
  {
    id: "cert-8",
    title: "Data Literacy",
    issuer: "IBM SkillsBuild",
    date: "2024",
    description: "Analytical proficiency in interpreting structured data tables, statistical inferences, visual data communication, and ethical AI/data management.",
    badgeTag: "IBM SkillsBuild",
    credlyUrl: "https://www.credly.com",
    category: "IBM",
    accentColor: "from-teal-600 to-emerald-500",
  },
  {
    id: "cert-9",
    title: "Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "2024",
    description: "Essential knowledge of network perimeter security, threat actor reconnaissance, malware behavior, and defense-in-depth methodologies.",
    badgeTag: "NSE Fundamentals",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-amber-500",
  },
  {
    id: "cert-10",
    title: "Introduction to Cybersecurity Exam v3.0 (NSE 2)",
    issuer: "Fortinet",
    date: "2023",
    description: "Examination of current threat landscapes, targeted attacks, phishing paradigms, and modern multi-layered network defense architectures.",
    badgeTag: "NSE 2",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-orange-500",
  },
  {
    id: "cert-11",
    title: "Introduction to the Threat Landscape Exam v3.0 (NSE 1)",
    issuer: "Fortinet",
    date: "2023",
    description: "Foundational exam covering the evolution of digital cyber threats, cybercrime syndicates, and basic defensive tactics.",
    badgeTag: "NSE 1",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-orange-500",
  },
  {
    id: "cert-12",
    title: "Getting Started in Cybersecurity Exam v3.0 (NSE 1)",
    issuer: "Fortinet",
    date: "2023",
    description: "Entry-level certification establishing cybersecurity awareness, safe computing practices, and organizational security policies.",
    badgeTag: "NSE 1",
    credlyUrl: "https://www.credly.com",
    category: "Fortinet",
    accentColor: "from-red-600 to-orange-500",
  },
];

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: "hack-1",
    title: "UC Innovation & IoT Hackathon",
    event: "University of Cebu Engineering Tech Fest",
    year: "2025",
    award: "First Runner-Up & Best Hardware Integration",
    description: "Engineered an automated off-grid solar power management system with an ESP32 microcontroller that analyzes real-time battery curves, regulates peak power draw, and pushes cloud telemetry over Wi-Fi.",
    technologies: ["ESP32", "C++", "Python", "MQTT", "Solar Hardware"],
  },
  {
    id: "hack-2",
    title: "Cebu Regional Hardware & Code Fest",
    event: "Visayas Regional Tech League",
    year: "2024",
    award: "Outstanding Prototype Award",
    description: "Built the prototype for a glass-layered LED TV whiteboard featuring automated mechanical wiper erasure, optical touch sensing, and private cloud canvas archiving.",
    technologies: ["Arduino", "Python", "OpenCV", "Stepper Motors", "C++"],
  },
  {
    id: "hack-3",
    title: "AI & Smart Campus Solution Sprint",
    event: "LPU Campus Innovation Challenge",
    year: "2024",
    award: "Finalist & Best Practical Utility",
    description: "Designed an AI-powered diagnostic assistant for campus IT departments, providing automated triage and DNS resolution paths for student workstations.",
    technologies: ["Python", "FastAPI", "TensorFlow Lite", "TypeScript", "Tailwind CSS"],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Glass-Layered LED TV Whiteboard IoT Prototype",
    type: "hardware",
    status: "completed",
    description: "Repurposed high-clarity LED TV glass layers with automated mechanical wiper erasure, optical touch sensors, and local private cloud archiving.",
    longDescription: "A patent-pending capstone engineering prototype that transforms reclaimed commercial LED TV glass panels into interactive smart whiteboards. Includes dual stepper-motor horizontal wiper blades for one-touch automated erasure, infrared touch grid triangulation, and a local offline-first private server sync via Raspberry Pi.",
    languages: ["C++", "Python", "ESP32", "Raspberry Pi", "OpenCV"],
    image: "/src/assets/images/project_whiteboard_iot_1793892269928.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: true,
    featured: true,
  },
  {
    id: "proj-2",
    title: "Off-Grid Solar Power Telemetry ESP32 Bot",
    type: "bot",
    status: "in-progress",
    description: "Autonomous IoT telemetry device tracking solar panel yields, LiFePO4 battery health degradation, and dispatching real-time diagnostic alerts.",
    longDescription: "An intelligent solar charge controller companion using an ESP32 microcontroller with shunt voltage sensing, ambient temperature probes, and predictive charge curve algorithms. Sends telemetry packets over MQTT and dispatches automated webhook alerts when battery anomalies occur.",
    languages: ["Python", "C++", "Arduino", "ESP32", "MQTT"],
    image: "/src/assets/images/project_solar_telemetry_1793892272574.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: true,
    featured: true,
  },
  {
    id: "proj-3",
    title: "ORBIT Engineering Lab Material Borrowing Web System",
    type: "web",
    status: "completed",
    description: "Modern web-based inventory tracking and student equipment checkout system featuring barcode scanner integration and audit logs.",
    longDescription: "Full-stack laboratory management platform engineered for engineering university labs. Allows students and faculty to borrow microcontrollers, oscilloscopes, and tools with barcode checkouts, automated return reminders, and instant inventory reconciliation.",
    languages: ["TypeScript", "React", "Node.js", "Tailwind CSS", "Express"],
    image: "/src/assets/images/project_lab_inventory_1793892271717.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: true,
    featured: true,
  },
  {
    id: "proj-4",
    title: "Hardware Diagnostics & Repair Ticketing API",
    type: "api",
    status: "completed",
    description: "High-performance REST API engine built for logging PC diagnostics, motherboard component replacements, and repair warranty lifecycles.",
    longDescription: "Designed for hardware repair shops and computer labs to track hardware fault trees (POST errors, capacitor blowouts, RAM parity faults, thermal throttling). Generates automated diagnostic reports and calculates MTBF (Mean Time Between Failures).",
    languages: ["TypeScript", "Node.js", "Express", "SQLite"],
    image: "/src/assets/images/research_ai_edge_node_1793892272478.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: false,
    featured: false,
  },
  {
    id: "proj-5",
    title: "Barangay Clearance & Incident Records Desktop App",
    type: "application",
    status: "completed",
    description: "Secure local governance desktop application for issuing community clearances, archiving blotter reports, and demographic stats.",
    longDescription: "Standalone desktop software created with C# .NET and modern UI components. Enables municipal and barangay secretariats to issue official certificates, record confidential blotter transcripts with role-based access control, and search resident history instantly.",
    languages: ["C#", ".NET", "WPF", "SQLite"],
    image: "/src/assets/images/project_lab_inventory_1793892271717.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: false,
    featured: false,
  },
  {
    id: "proj-6",
    title: "Edge Neural Circuit: 2D Logic Gate Simulator",
    type: "game",
    status: "completed",
    description: "Interactive visual game and simulation teaching digital electronics, logic gates (AND, OR, XOR, NAND), and binary half-adders.",
    longDescription: "An educational sandbox where students place logic gates on an interactive breadboard grid, connect dynamic copper wiring, and observe real-time clock pulses and truth table validations with satisfying visual and audio feedback.",
    languages: ["JavaScript", "HTML5 Canvas", "CSS3"],
    image: "/src/assets/images/research_ai_edge_node_1793892272478.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com",
    hasPreview: true,
    featured: false,
  },
];

export const ACADEMICS_DATA: AcademicRecord[] = [
  {
    id: "acad-1",
    level: "Higher Education / University",
    degree: "BTech in Computer Science & Engineering (AI & Machine Learning Specialization)",
    institution: "Lovely Professional University (LPU)",
    year: "2024 – 2028 (Currently in 2nd Year)",
    status: "Active / In Progress",
    scoreOrGpa: "Grade A / Dean's List Standing",
    description: "Comprehensive curriculum focusing on artificial intelligence, neural networks, supervised/unsupervised machine learning, algorithmic data structures, computer vision, and edge AI hardware.",
    highlights: [
      "Artificial Intelligence & Machine Learning specialization core",
      "Advanced Data Structures & Algorithms with Python & C++",
      "Mathematical Foundations: Discrete Math, Linear Algebra, Probability",
      "Hands-on AI Lab: Deep Learning frameworks, model optimization, edge inferencing",
    ],
  },
  {
    id: "acad-2",
    level: "Tertiary Engineering Education",
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Cebu - Banilad",
    year: "Expected 2026",
    status: "Completed Core Pre-Requisites",
    scoreOrGpa: "Exemplary Engineering Standing",
    description: "Deep dive into low-level microprocessor architecture, circuit analysis, digital signal processing, embedded systems design with ESP32/Arduino, and hardware diagnostics.",
    highlights: [
      "Microprocessor Architecture & Assembly Language",
      "Embedded Systems, IoT & Sensor Integration",
      "Computer Networks, Cisco Systems & Linux Server Administration",
      "Supervised under Engr. Franz Owen N. Morada",
    ],
  },
  {
    id: "acad-3",
    level: "12th Class / Senior High School",
    degree: "Senior High School — STEM & Electronics Strand",
    institution: "Saint Louis College - Cebu",
    year: "Graduated 2022",
    status: "Graduated with Honors",
    scoreOrGpa: "High Academic Distinction",
    description: "Formed solid mathematical, physical science, and electronics foundations. Specialized in applied physics, calculus, computer programming basics, and basic circuit prototyping.",
    highlights: [
      "Graduated with Academic Honors",
      "Lead student in Science, Technology, Engineering & Mathematics (STEM)",
      "Foundational electronics, PCB soldering, and micro-controller assembly",
    ],
  },
  {
    id: "acad-4",
    level: "10th Class / Junior High School",
    degree: "Secondary School Certificate / High School Foundation",
    institution: "Secondary High School Education",
    year: "Graduated 2020",
    status: "Completed with Distinction",
    scoreOrGpa: "Consistent Honor Roll",
    description: "Well-rounded secondary education focusing on foundational sciences, mathematics, English grammar, analytical communication, and introductory computer computer literacy.",
    highlights: [
      "Honor Student & Active Science Club participant",
      "Top percentile in Mathematics and English Vocabulary",
      "Early self-taught exploration into computer hardware disassembly and repair",
    ],
  },
];

export const ACADEMIC_REFERENCE = {
  name: "Engr. Franz Owen N. Morada",
  title: "Faculty of Engineering Department",
  institution: "University of Cebu - Banilad",
  email: "0wen.raiwenbal01@gmail.com",
  relationship: "Academic Professor & Capstone Research Advisor",
  endorsement: "Christian Jaye has consistently exhibited exceptional aptitude in both low-level hardware diagnostics and software development. His work on the glass-layered whiteboard and embedded systems demonstrated ingenuity, perseverance, and rigorous technical discipline.",
};

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "res-1",
    title: "Glass-Layered LED TV Whiteboard Prototype with Automated Erasure & Private Cloud Access",
    role: "Lead Engineering Researcher & Hardware Designer",
    year: "2025 – 2026",
    image: "/src/assets/images/project_whiteboard_iot_1793892269928.jpg",
    description: "A novel instructional hardware display engineered by repurposing salvaged high-clarity commercial LED TV glass panels, equipped with an automated dual-axis mechanical wiper and local private cloud archiving.",
    abstract: "Educational institutions generate significant electronic waste through obsolete large-format flat panel displays, while interactive smart boards remain prohibitively expensive for developing regions. This paper presents the architecture, mechanical design, and embedded firmware for an interactive glass whiteboard constructed from recycled commercial LED TV glass layers. Incorporating a stepper-motor-driven precision wiper with micro-fiber wiping elements, the system achieves complete surface erasure in under 4.2 seconds. Optical infrared frame sensors capture annotations at 60 Hz, synchronized directly to a lightweight on-premise private cloud server powered by an ESP32 and Raspberry Pi cluster.",
    methodology: "Experimental fabrication utilizing 55-inch recycled LED panels, dual NEMA 17 stepper motors, GT2 timing belts, and an optical frame matrix. Performance was evaluated across 200 erasure cycles, surface reflectivity tests, and local LAN sync latency measurements.",
    keywords: ["Hardware Repurposing", "Interactive Displays", "Automated Erasure", "Private Cloud", "ESP32", "Embedded Systems"],
    paperUrl: "#",
    hasLink: true,
  },
  {
    id: "res-2",
    title: "Off-Grid Solar Power Management & Telemetry Analysis using Microcontrollers",
    role: "Co-Author & Telemetry Systems Engineer",
    year: "2024",
    image: "/src/assets/images/project_solar_telemetry_1793892272574.jpg",
    description: "An analytical study on solar harvesting efficiency, battery degradation monitoring, and real-time lightweight telemetry over Wi-Fi/LoRa for remote workstations.",
    abstract: "Decentralized micro-grids and remote telecommunication installations rely heavily on photovoltaic storage systems where battery degradation is difficult to diagnose until critical cell failure occurs. This research examines continuous voltage-current curve monitoring using shunt resistor arrays and high-resolution ADC converters on ESP32 microcontrollers. By tracking Coulomb counting against ambient temperature differentials, our algorithm predicts battery state-of-health (SoH) with 94.6% accuracy, reducing unscheduled station visits by 38%.",
    methodology: "Field deployment with 200W monocrystalline solar panels, 12V LiFePO4 battery banks, INA219 current sensors, and MQTT telemetry aggregation over Wi-Fi and sub-GHz links.",
    keywords: ["Photovoltaics", "Battery Telemetry", "IoT Diagnostics", "Microcontrollers", "Energy Harvesting"],
    paperUrl: "#",
    hasLink: true,
  },
  {
    id: "res-3",
    title: "Edge-AI Inferencing on Low-Power Embedded Microcontrollers for Real-Time Diagnostics",
    role: "Principal Author",
    year: "2024",
    image: "/src/assets/images/research_ai_edge_node_1793892272478.jpg",
    description: "Investigation of quantized 8-bit neural network models running directly on ARM Cortex-M and Xtensa microcontrollers for audio/vibration hardware fault detection.",
    abstract: "Traditional anomaly detection in mechanical assemblies and industrial electronics requires high-bandwidth streaming of sensor data to centralized cloud clusters. This work investigates the deployment of quantized 8-bit Convolutional Neural Networks (CNNs) directly onto resource-constrained microcontrollers (ESP32-S3 and STM32). We demonstrate real-time acoustic classification of faulty cooling fans and power inverter coil whine with inference latencies under 45ms and power consumption below 280mW.",
    methodology: "TensorFlow Lite for Microcontrollers (TFLite Micro) model quantization, synthetic noise injection, and real-world audio sampling via I2S MEMS microphones.",
    keywords: ["Edge AI", "TinyML", "Microcontroller Inferencing", "Hardware Diagnostics", "Quantization"],
    paperUrl: "#",
    hasLink: true,
  },
];

export const FEEDBACKS_DATA: FeedbackItem[] = [
  {
    id: "fb-1",
    name: "Alexander Lindqvist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    jobTitle: "Senior DevOps Engineer · one.com Global Infrastructure",
    languageTag: "PHP, DNS & Web Hosting",
    productivityBoost: "+85% Resolution Speed",
    testimonial: "Christian's diagnostic instincts when troubleshooting DNS record propagation, SSL certificate chains, and PHP memory limits are among the sharpest in our tier. He turns complex server outages into clear, reassuring client solutions.",
    date: "October 2026",
  },
  {
    id: "fb-2",
    name: "Engr. Franz Owen N. Morada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    jobTitle: "Faculty of Engineering · University of Cebu - Banilad",
    languageTag: "C++ & Hardware Architecture",
    productivityBoost: "+90% Thesis Efficiency",
    testimonial: "Christian is a standout engineer who couples theoretical rigor with extraordinary hands-on prototyping. His glass whiteboard design demonstrated masterclass microcontroller integration and electro-mechanical precision.",
    date: "September 2026",
  },
  {
    id: "fb-3",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    jobTitle: "Technical Support Operations Lead",
    languageTag: "Python & System Diagnostics",
    productivityBoost: "+75% Workflow Speed",
    testimonial: "Unflappable patience, phenomenal English de-escalation skills, and deep hardware knowledge. Christian consistently holds one of the highest customer satisfaction scores in our team.",
    date: "August 2026",
  },
  {
    id: "fb-4",
    name: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    jobTitle: "IoT Systems Architect · Solaris Tech",
    languageTag: "ESP32 & Microcontroller Firmware",
    productivityBoost: "+80% Sensor Reliability",
    testimonial: "The solar telemetry code Christian created for our field trial performed without a single glitch through intense thermal fluctuations. Highly recommended for any embedded or AI hardware project.",
    date: "July 2026",
  },
  {
    id: "fb-5",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    jobTitle: "Full-Stack Project Coordinator",
    languageTag: "TypeScript & React",
    productivityBoost: "+60% Delivery Time",
    testimonial: "Christian built our laboratory borrowing system cleanly ahead of our semester deadline. The UI was intuitive, zero bugs during faculty audit, and the barcode integration worked instantly.",
    date: "May 2026",
  },
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "Navigating DNS & PHP Webspace Troubleshooting for Global Users",
    excerpt: "Behind the scenes at one.com: how to diagnose MX/CNAME records, resolve Apache/PHP fatal timeouts, and communicate solutions with empathetic clarity.",
    date: "October 24, 2026",
    readTime: "5 min read",
    category: "Systems & Web Hosting",
    author: "Christian Jaye M. Fernan",
    content: `When a customer's website goes down or their corporate emails suddenly bounce, every second feels like an eternity. As a Technical Support Specialist at one.com handling queries from all over the world, I've observed that 90% of panic stems not from irreparable server faults, but from opaque DNS propagation delays or subtle PHP misconfigurations.

### 1. The Anatomy of a DNS Triage
The first instinct of an inexperienced support engineer is often to reboot or alter nameservers. In reality, the gold standard is systematic DNS tracing:
- Inspect the authoritative nameservers with \`dig +trace\`.
- Verify SOA serial increments—if a customer updated an A record but the primary DNS node hasn't synchronized secondary zone transfers, cached records will serve stale IPs.
- Check TTL values. Lowering TTL to 300 seconds prior to server migrations prevents multi-hour propagation stalls.

### 2. De-escalation Through Empathy and Precision
Technical expertise alone is insufficient if the client feels ignored. De-escalation hinges on three pillars:
1. **Acknowledge and Validate**: "I see exactly how critical this checkout portal is for your sales campaign today."
2. **Clear Timelines**: Never state "we will fix it soon." Instead, say "I am actively checking the PHP error logs right now and will provide a status update in 4 minutes."
3. **Proactive Root-Cause Explanation**: Once resolved, explain what happened in plain, non-condescending terms so the client feels empowered.

Mastering this balance between deep technical literacy and human empathy is what separates standard support from world-class system stewardship.`,
  },
  {
    id: "blog-2",
    title: "The Evolution of Hardware Diagnostics & Arduino Prototyping",
    excerpt: "Why understanding physical solder joints, circuit impedance, and bus architectures makes you a dramatically better software engineer.",
    date: "September 15, 2026",
    readTime: "6 min read",
    category: "Hardware & IoT",
    author: "Christian Jaye M. Fernan",
    content: `In the modern software landscape, many developers interact exclusively with cloud hypervisors and abstract JavaScript runtimes. While high-level abstraction accelerates web applications, it can disconnect engineers from what physically happens when silicon turns electricity into logic.

### From Solder Smoke to Clean Signal Paths
During my computer engineering studies and hands-on PC/laptop diagnostics, diagnosing elusive memory corruption taught me more about race conditions than any textbook. When a laptop intermittently crashes under load:
- Is it a kernel panic caused by bad software pointers?
- Or is it thermal paste degradation on a VRM phase that causes voltage ripple under transient CPU spikes?

Understanding oscilloscope traces, ground loop hums, and I2C pull-up resistor sizing gives you an intuition for resource constraints that transforms your software development. When you write code knowing that every memory allocation exercises physical capacitor arrays and memory banks, you write tighter, more resilient algorithms.`,
  },
  {
    id: "blog-3",
    title: "Bridging AI with Embedded Systems in Computer Engineering",
    excerpt: "Exploring TinyML, 8-bit model quantization, and deploying neural nets on sub-$5 microcontrollers for edge autonomy.",
    date: "August 02, 2026",
    readTime: "7 min read",
    category: "AI & Embedded Computing",
    author: "Christian Jaye M. Fernan",
    content: `Artificial Intelligence is frequently associated with massive GPU data centers burning megawatts to train trillions of parameters. But an equally revolutionary frontier is happening on the opposite end of the spectrum: **TinyML and Edge AI**.

### Why the Future of AI is at the Edge
When monitoring an off-grid solar installation in the mountains of Cebu or industrial turbines on an offshore rig, cloud connectivity is either nonexistent, expensive, or latency-prohibitive.

By quantizing FP32 neural network weights down to INT8 tensors:
- We reduce model memory footprints by over 75% with negligible accuracy drop.
- We enable microcontrollers like the ESP32-S3 or Raspberry Pi RP2040 to execute inferencing loops locally at milliwatt power draws.
- Sensor data never leaves the device, guaranteeing physical privacy and instantaneous sub-50ms reaction times.

In my ongoing research on the Glass-Layered Whiteboard and solar telemetry platforms, embedding local intelligence into the silicon chassis is where true engineering elegance resides.`,
  },
];
