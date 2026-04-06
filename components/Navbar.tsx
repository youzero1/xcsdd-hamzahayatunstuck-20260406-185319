'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>JD<span>.</span></a>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
        >
          <span className={open ? styles.x1 : ''}></span>
          <span className={open ? styles.x2 : ''}></span>
          <span className={open ? styles.x3 : ''}></span>
        </button>
      </div>
    </nav>
  );
}
