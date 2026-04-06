import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart, payment integration, and admin dashboard built with Next.js and Stripe.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    color: '#6c63ff',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-Time Chat App',
    description:
      'WebSocket-based chat with rooms, direct messages, notifications, and end-to-end encryption.',
    tags: ['React', 'Node.js', 'Socket.io', 'Redis'],
    color: '#ff6584',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description:
      'GPT-powered tool for generating blog posts, social captions, and marketing copy with custom tone settings.',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'tRPC'],
    color: '#43e97b',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'DevOps Dashboard',
    description:
      'Kubernetes cluster monitoring dashboard with real-time metrics, alerts, and deployment pipelines.',
    tags: ['React', 'Golang', 'Prometheus', 'Docker'],
    color: '#f7971e',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Task Management SaaS',
    description:
      'Collaborative project tracker with Kanban boards, time tracking, and team analytics.',
    tags: ['Vue.js', 'GraphQL', 'MongoDB', 'AWS'],
    color: '#a18cd1',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Open Source CLI Tool',
    description:
      'Developer productivity CLI with scaffolding, code formatting, and automated testing helpers.',
    tags: ['Node.js', 'TypeScript', 'Commander.js'],
    color: '#4facfe',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Projects</div>
          <h2>Featured Work</h2>
          <p>A selection of projects I&apos;ve built and shipped</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardTop}>
                <div
                  className={styles.colorDot}
                  style={{ background: p.color }}
                ></div>
                <div className={styles.links}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubSmall />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
