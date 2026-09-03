import React from 'react';

export default function Membership() {
  const plans = [
    {
      name: "Community Member",
      price: "$29",
      period: "/month",
      desc: "Perfect for emerging developers looking to connect and learn.",
      popular: false,
      features: [
        "Access to Caret Discord Community",
        "Weekly Tech Newsletter & Synthesis",
        "Access to Public Masterclasses",
        "Community Project Showcase"
      ],
      buttonText: "Join Community",
      buttonStyle: "btn-secondary"
    },
    {
      name: "Pro Builder",
      price: "$79",
      period: "/month",
      desc: "For active engineers and designers building real-world software.",
      popular: true,
      features: [
        "Everything in Community Member",
        "Private Dev Channels & Pairing",
        "Full Knowledge Base & Templates",
        "1-on-1 Mentorship Sessions",
        "Early Beta Testing Opportunities"
      ],
      buttonText: "Get Pro Access",
      buttonStyle: "btn-primary"
    },
    {
      name: "Fellowship",
      price: "$199",
      period: "/month",
      desc: "For founders, architects, and senior leaders scaling teams.",
      popular: false,
      features: [
        "Everything in Pro Builder",
        "Grant Funding Application Access",
        "VIP Executive Dinners & Meetups",
        "Direct Talent Matchmaking",
        "Dedicated Account Coordinator"
      ],
      buttonText: "Apply for Fellowship",
      buttonStyle: "btn-secondary"
    }
  ];

  return (
    <section className="section" id="membership">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag">Membership Tiers</span>
        <h2 className="section-title">Transparent & Simple Pricing</h2>
        <p className="section-subtitle">
          Choose the level of involvement that best fits your current career trajectory and project goals.
        </p>

        <div className="pricing-grid" style={{ textAlign: 'left' }}>
          {plans.map((plan, idx) => (
            <div 
              className={`card pricing-card ${plan.popular ? 'popular' : ''}`} 
              key={idx}
            >
              {plan.popular && <div className="badge-popular">Most Popular</div>}
              <div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price} <span>{plan.period}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>

                <ul className="feature-list">
                  {plan.features.map((feat, fIdx) => (
                    <li className="feature-item" key={fIdx}>
                      <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`btn ${plan.buttonStyle}`} style={{ width: '100%' }}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
