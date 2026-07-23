export const profile = {
  name: 'Sai Hemanth Babu Sunkari',
  title: 'Software Engineer',
  location: 'Denton, Texas, United States',
  email: 'hemanth.sunkari@gmail.com',
  phone: '(940) 977-5002',
  github: 'https://github.com/hemanth145',
  linkedin: 'https://linkedin.com/in/sai-babu-s-318b4634b',
  summary:
    'Software Engineer with hands-on experience building secure, scalable microservices in Java/Spring Boot and event-driven systems with Apache Kafka, deployed via Docker/Kubernetes on AWS (EKS, EC2, S3, Lambda). Strong grounding in the full SDLC — design, development, code reviews, testing, CI/CD, and production support/on-call. Comfortable troubleshooting complex distributed-system issues and tuning SQL for reliability and performance.',
}

export const education = {
  school: 'University of North Texas',
  degree: 'Master of Science, Computer Science',
  period: 'Jan 2023 – Dec 2024',
  gpa: '3.45',
}

export const experience = [
  {
    company: 'Coder Version',
    role: 'Software Engineer',
    period: 'Feb 2025 – Present',
    points: [
      'Designed and developed scalable, event-driven microservices using Java and Spring Boot, architecting resilient distributed systems for high-volume financial data processing.',
      'Built and maintained Apache Kafka producers and consumers for asynchronous, real-time event streaming between decoupled services.',
      'Integrated secure RESTful APIs with Spring Security, ensuring authenticated communication across microservices in a large-scale distributed environment.',
      'Containerized applications with Docker and authored Kubernetes deployment manifests; managed orchestration on AWS EKS, improving scalability and reliability.',
      'Optimized complex SQL queries and performed performance tuning to accelerate BI reporting and reduce production latency.',
      'Practiced CI/CD principles across the delivery lifecycle and participated in code reviews, on-call operations, and production monitoring.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst Trainee',
    location: 'Chennai, India',
    period: 'Aug 2021 – Dec 2022',
    points: [
      'Contributed to multiple projects using Java, Python, JavaScript, and C to develop data-driven solutions, applying OOP design principles and best practices.',
      'Designed and maintained relational databases ensuring efficient data storage, integrity, and analytics readiness.',
      'Collaborated with cross-disciplinary teams to analyze operational data and deliver insights that improved project timelines and stakeholder decisions.',
      'Enhanced system efficiency by developing scalable solutions and applying statistical methods to validate results.',
    ],
  },
]

export const projects: { title: string; stack: string[]; points: string[]; link?: string; linkLabel?: string }[] = [
  {
    title: 'Real-Time Face Recognition & Attendance System',
    stack: ['Python', 'Dlib', 'OpenCV'],
    link: 'https://github.com/hemanth145/face-attendance-system',
    linkLabel: 'View on GitHub',
    points: [
      'Designed and deployed a real-time face recognition system integrating facial landmark detection, histogram equalization, and Adaboost/Haar cascade tracking for high accuracy.',
      'Optimized for real-time execution via multithreading and memory-efficient data handling; validated across diverse camera environments.',
      'Documented system architecture, algorithms, and deployment procedures to support maintainability and future scalability.',
    ],
  },
  {
    title: 'EduConnect Admission Hub',
    stack: ['JSP', 'MySQL', 'HTML/CSS/JavaScript'],
    link: 'https://hemanth145.github.io/COLLEGE-FORMS/',
    points: [
      'Architected and built a full-stack college admission web platform with server-side logic, persistent storage, and a responsive front-end UX.',
      'Engineered form-submission pipelines, database schema design, and cross-browser rendering to ensure data integrity and seamless interactions.',
    ],
  },
  {
    title: 'Local AI Chatbot CLI',
    stack: ['Python', 'LangChain', 'Ollama'],
    link: 'https://hemanth145-chat-streamlit-appapp-nbdvbl.streamlit.app',
    points: [
      'Built a local CLI chatbot with on-device LLM models (Gemma 3.1B, Gemma 4), enabling private, low-latency conversational AI with no cloud dependency.',
      'Diagnosed and fixed a corrupted UTF-16-encoded requirements.txt and a Windows console encoding crash on emoji output, patching both via sys.stdout.reconfigure(encoding="utf-8").',
      'Configured a Python virtual environment with PyTorch and Transformers for seamless local model execution.',
    ],
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'PHP'] },
  { label: 'Cloud & DevOps', items: ['AWS EKS', 'AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub'] },
  { label: 'Frameworks & Tools', items: ['Spring Boot', 'Spring Security', 'React', 'Redux', 'Apache Kafka', 'LangChain', 'Ollama', 'REST APIs', 'JDBC', 'Bootstrap'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'NoSQL'] },
  { label: 'AI & Data', items: ['Machine Learning', 'Pandas', 'NumPy', 'PyTorch', 'Transformers', 'Tableau', 'GenAI Tools'] },
]

export const marqueeSkills = [
  'Java', 'Spring Boot', 'Apache Kafka', 'Docker', 'Kubernetes', 'AWS', 'React',
  'TypeScript', 'PostgreSQL', 'MongoDB', 'Python', 'LangChain',
]

export const certifications = [
  'Google IT Automation with Python — Coursera',
  'Web Design for Everybody: Basics of Web Development & Coding — Coursera',
  'Google IT Support Professional Certificate — Coursera',
]
