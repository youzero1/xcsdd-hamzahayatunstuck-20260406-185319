import styles from './Experience.module.css';

const jobs = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Acme Corp',
    period: '2022 – Present',
    description:
      'Leading development of microservices architecture serving 500K+ users. Reduced page load times by 60% and led a team of 4 engineers.',
    achievements: [
      'Architected GraphQL API serving 50M+ requests/month',
      'Reduced CI pipeline duration by 45%',
      'Mentored 3 junior developers to senior level',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Hub',
    period: '2020 – 2022',
    description:
      'Built end-to-end features for a SaaS platform from scratch, including authentication, billing, and analytics dashboards.',
    achievements: [
      'Shipped MVP in 3 months with Next.js & PostgreSQL',
      'Integrated Stripe billing with 99.9% uptime',
      'Grew user base from 0 to 10K in first year',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 – 2020',
    description:
      'Delivered responsive, accessible web apps for 15+ clients across e-commerce, healthcare, and fintech sectors.',
    achievements: [
      'Improved Lighthouse scores to 95+ across all projects',
      'Introduced component library used across 8 projects',
      'Won internal hackathon with AR shopping feature',
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Experience</div>
          <h2>Work History</h2>
          <p>Where I&apos;ve worked and what I&apos;ve built</p>
        </div>
        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <div key={job.company} className={styles.item}>
              <div className={styles.dot}></div>
              {i < jobs.length - 1 && <div className={styles.line}></div>}
              <div className={styles.card}>
                <div className={styles.meta}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.company}>{job.company}</span>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <p className={styles.desc}>{job.description}</p>
                <ul className={styles.achievements}>
                  {job.achievements.map((a) => (
                    <li key={a}>
                      <span className={styles.check}>✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
