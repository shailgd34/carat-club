import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section" id="resources">
      <div className="container">
        <div className="cta-banner">
          <span className="section-tag">Stay Connected</span>
          <h2 className="cta-title">Ready to Elevate Your Craft?</h2>
          <p className="cta-desc">
            Subscribe to our weekly high-signal digest covering system design, developer tools, and exclusive Caret Club updates.
          </p>

          {submitted ? (
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', borderRadius: '8px', display: 'inline-block', color: '#10b981', fontWeight: 600 }}>
              Thank you for subscribing! Check your inbox for the welcome issue.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '0.8rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
