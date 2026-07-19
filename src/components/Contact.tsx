import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    try {
      // You can get your free access key from https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4fb4f8b3-6f7a-4690-9b4a-2984bd80951d',
          from_name: 'Portfolio Contact Form',
          to_email: 'duaafatimah00@gmail.com',
          name: formState.name,
          email: formState.email,
          subject: formState.subject || 'Portfolio Contact Form Submission',
          message: formState.message
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <div className="glow-blur glow-cyan" style={{ bottom: '10%', right: '5%' }}></div>
      
      <div className="section-header">
        <span className="section-tag">Get in Touch</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-desc">
          I am currently open to freelance contracts and full-time software engineering roles. Let's discuss your next project!
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Info */}
        <div className="contact-info">
          <p className="contact-meta-desc">
            Feel free to reach out via email or phone. I usually respond within 24 hours.
          </p>
          
          <div className="contact-list">
            <div className="contact-card glass glass-hover">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Email Me</span>
                <a href="mailto:duaafatimah00@gmail.com" className="contact-val">duaafatimah00@gmail.com</a>
              </div>
            </div>

            <div className="contact-card glass glass-hover">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Call Me</span>
                <a href="tel:03320743707" className="contact-val">03320743707</a>
              </div>
            </div>

            <div className="contact-card glass glass-hover">
              <div className="contact-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Location</span>
                <span className="contact-val">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/duaafatimah-df" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
           
            <a href="mailto:duaafatimah00@gmail.com" className="social-icon" aria-label="Mail Me Direct">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box glass">
          <h3 className="contact-form-title">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Discussion"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder="Your message details..."
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="form-status success">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error">
                Please fill in all the required fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
