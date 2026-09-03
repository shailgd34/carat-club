import React from 'react';

export default function Features() {
  const featureItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Private Developer Hub",
      desc: "Access dedicated private channels, code review circles, and direct pairing sessions with senior engineering leaders."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Curated Knowledge Base",
      desc: "Comprehensive architecture guides, production checklists, and verified UI design systems built for modern web apps."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Exclusive Masterclasses",
      desc: "Bi-weekly live technical workshops hosted by industry founders, principal engineers, and product specialists."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <polyline points="17 11 19 13 23 9"/>
        </svg>
      ),
      title: "Talent Matchmaking",
      desc: "Connect directly with top tier tech companies and startups looking to hire verified Caret Club builders."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: "Project Incubation",
      desc: "Pitch early-stage projects to our internal micro-grant fund and receive feedback from seasoned investors."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Global Meetups",
      desc: "In-person regional gatherings and roundtables in major tech hubs including San Francisco, London, and Tokyo."
    }
  ];

  return (
    <section className="section" id="features">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag">Core Value</span>
        <h2 className="section-title">Everything You Need to Scale Your Craft</h2>
        <p className="section-subtitle">
          Designed specifically for ambitious developers and creators seeking high-signal networking without the noise.
        </p>

        <div className="features-grid" style={{ textAlign: 'left' }}>
          {featureItems.map((item, idx) => (
            <div className="card feature-card" key={idx}>
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
