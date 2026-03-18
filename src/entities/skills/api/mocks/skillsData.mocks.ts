export const skillsData = [
  // Cloud computing skills
  { name: 'AWS EC2', category: 'cloud', level: 95, icon: '☁️' },
  { name: 'AWS Lambda', category: 'cloud', level: 90, icon: '⚡' },
  { name: 'AWS S3', category: 'cloud', level: 95, icon: '📦' },
  { name: 'AWS RDS', category: 'cloud', level: 85, icon: '🗃️' },
  { name: 'AWS CloudFormation', category: 'cloud', level: 80, icon: '🏗️' },
  { name: 'AWS ECS/EKS', category: 'cloud', level: 85, icon: '🐳' },
  { name: 'API Gateway', category: 'cloud', level: 85, icon: '🐳' },
  { name: 'CloudWatch', category: 'cloud', level: 85, icon: '🐳' },
  { name: 'Route 53', category: 'cloud', level: 85, icon: '🐳' },

  // Devops Skills
  { name: 'Docker', category: 'devops', level: 95, icon: '🐳' },
  { name: 'Kubernetes', category: 'devops', level: 80, icon: '☸️' },
  { name: 'Terraform', category: 'devops', level: 85, icon: '🏗️' },
  { name: 'Ansible', category: 'devops', level: 85, icon: '🏗️' },
  { name: 'Argo', category: 'devops', level: 85, icon: '🏗️' },
  { name: 'GitHub Actions', category: 'devops', level: 90, icon: '🔄' },
  { name: 'GitLab CI', category: 'devops', level: 90, icon: '🔄' },
  { name: 'Jenkins', category: 'devops', level: 90, icon: '🔄' },
  { name: 'Grafana', category: 'devops', level: 90, icon: '🔄' },
  { name: 'Prometheus', category: 'devops', level: 90, icon: '🔄' },
  { name: 'ELK', category: 'devops', level: 90, icon: '🔄' },
  { name: 'Metabase', category: 'devops', level: 90, icon: '🔄' },

  // Backend Skills
  { name: 'Node.js', category: 'backend', level: 95, icon: '💚' },
  { name: 'Express JS', category: 'backend', level: 85, icon: '🐱' },
  { name: 'REST API', category: 'backend', level: 85, icon: '◈' },
  { name: 'Fast API', category: 'backend', level: 85, icon: '◈' },
  { name: 'Supabase', category: 'backend', level: 85, icon: '◈' },

  // Frontend Skills
  { name: 'React', category: 'frontend', level: 95, icon: '⚛️' },
  { name: 'Next.js', category: 'frontend', level: 90, icon: '▲' },
  { name: 'TypeScript', category: 'frontend', level: 95, icon: '📘' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, icon: '🎨' },

  // Database Skils
  { name: 'PostgreSQL', category: 'database', level: 90, icon: '🐘' },
  { name: 'MongoDB', category: 'database', level: 90, icon: '🍃' },
  { name: 'Redis', category: 'database', level: 85, icon: '🔴' },
  { name: 'Prisma', category: 'database', level: 85, icon: '🔴' },
  { name: 'MySQL', category: 'database', level: 85, icon: '🔴' },

  // Other Skills
  { name: 'Git', category: 'tools', level: 95, icon: '📝' },
  { name: 'Linux', category: 'tools', level: 85, icon: '🐧' },
  { name: 'Scrum', category: 'tools', level: 85, icon: '🐧' },
  { name: 'Agile', category: 'tools', level: 85, icon: '🐧' },
  { name: 'IA & Vibe Coding', category: 'tools', level: 85, icon: '🐧' },
  { name: 'DDD', category: 'tools', level: 85, icon: '🐧' },
  { name: 'SOLID & CLEAN CODE', category: 'tools', level: 85, icon: '🐧' },
];

export const skillsByCategory = skillsData.reduce((acc: any, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});
