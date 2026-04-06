import styles from './Skills.module.css';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Sass', level: 88 },
      { name: 'Vue.js', level: 72 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Python / Django', level: 75 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker / K8s', level: 80 },
      { name: 'CI/CD (GitHub Actions)', level: 85 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'Git', level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Skills</div>
          <h2>My Tech Stack</h2>
          <p>Technologies I work with on a daily basis</p>
        </div>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.title} className={styles.card}>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <div className={styles.bars}>
                {cat.skills.map((s) => (
                  <div key={s.name} className={styles.barItem}>
                    <div className={styles.barLabel}>
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${s.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
