'use client';
import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Contact</div>
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let&apos;s talk.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>Let&apos;s work together</h3>
            <p>
              I&apos;m currently open to freelance projects and full-time opportunities.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <MailIcon />
                </div>
                <div>
                  <span className={styles.clabel}>Email</span>
                  <a href="mailto:john@example.com">john@example.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <MapIcon />
                </div>
                <div>
                  <span className={styles.clabel}>Location</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <PhoneIcon />
                </div>
                <div>
                  <span className={styles.clabel}>Phone</span>
                  <a href="tel:+14155550123">+1 (415) 555-0123</a>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                ? '\u2713 Message Sent!'
                : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className={styles.error}>Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
