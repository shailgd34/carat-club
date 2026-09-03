import React from 'react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  const sections = [
    {
      title: "Collections",
      links: [
        { name: "Engagement Rings", path: "/engagement-rings/solitaire" },
        { name: "Wedding Rings", path: "/wedding-rings" },
        { name: "Loose Diamonds", path: "/loose-diamonds" },
        { name: "Custom Jewellery", path: "/custom-jewellery" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "30% Deposit & Delivery", path: "/deposit-delivery" },
        { name: "Book a Consultation", path: "/customer-care/consultation" },
        { name: "Track Your Order", path: "/customer-care/track-order" },
        { name: "Showcase", path: "/showcase" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Carat Club", path: "/about" },
        { name: "Contact Us", path: "/customer-care/contact" },
        { name: "FAQs", path: "/customer-care/faqs" },
        { name: "Shipping & Delivery", path: "/customer-care/shipping" },
        { name: "Returns & Exchanges", path: "/customer-care/returns" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="font-sans text-brand-charcoal bg-[#FAFAFA] selection:bg-brand-gold selection:text-white pt-20 pb-32">
      <section className="text-center mb-16 px-4">
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">Directory</span>
        <h1 className="font-serif text-[42px] lg:text-[56px] text-brand-charcoal mb-6">Sitemap</h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-white p-10 lg:p-16 shadow-sm border border-brand-light-border">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-[20px] text-brand-charcoal mb-6 border-b border-brand-light-border pb-3">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.path} className="text-[14px] text-brand-taupe hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
