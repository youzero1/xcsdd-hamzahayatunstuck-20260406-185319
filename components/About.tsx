import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.badge}>About Me</div>
        <div className={styles.grid}>
          <div className={styles.avatar}>
            <div className={styles.avatarInner}>
              <span className={styles.avatarInitials}>JD</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>5+</strong>
                <span>Years Exp.</span>
              </div>
              <div className={styles.stat}>
                <strong>40+</strong>
                <span>Projects</span>
              </div>
              <div className={styles.stat}>
                <strong>20+</strong>
                <span>Clients</span>
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <h2>Passionate Developer &amp; Problem Solver</h2>
            <p>
              I&apos;m a full-stack developer with over 5 years of experience building
              scalable web applications. I specialize in React, Next.js, and Node.js,
              and I&apos;m passionate about clean code, great UX, and performance.
            </p>
            <p>
              When I&apos;m not coding, I enjoy open-source contributions, writing
              technical blog posts, and mentoring junior developers.
            </p>
            <div className={styles.info}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Location</span>
                <span>San Francisco, CA</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Email</span>
                <span>john@example.com</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Status</span>
                <span className={styles.available}>Available for work</span>
              </div>
            </div>
            <a href="/resume.pdf" className={styles.download} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
