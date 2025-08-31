import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

const About = () => {
  const aboutData = {
    title: 'About PlotToPalace',
    mission: 'Our mission is to simplify the complex process of house planning by providing a user-friendly platform that transforms ideas into detailed, functional layouts. We believe that designing your home should be an enjoyable and accessible experience for everyone.',
    offerings: [
      'Intuitive Design Tools: Create floor plans, arrange rooms, and add essential elements with our easy-to-use interface.',
      'Smart Layout Generation: Input your requirements and let our intelligent system suggest optimal layouts tailored to your needs.',
      'Customization and Flexibility: Personalize every aspect of your design, from room dimensions to furniture placement, ensuring your vision is perfectly realized.',
      'Collaborative Features: Share your designs with others and gather feedback to refine your plans.',
      'Material Calculations: Get accurate material requirements and cost estimates for your projects.',
      '3D Visualization: See your designs come to life with our advanced 3D blueprint viewer.'
    ],
    whyChoose: 'At PlotToPalace, we are committed to providing a seamless and powerful design experience. Whether you\'re planning a new home, renovating an existing space, or simply exploring design possibilities, our platform offers the tools and support you need to succeed. Join our community and start designing your perfect palace today!',
    team: [
      {
        name: 'Design Team',
        description: 'Expert architects and interior designers who ensure every project meets the highest standards.',
        icon: '👨‍🎨'
      },
      {
        name: 'Engineering Team',
        description: 'Structural engineers and construction specialists who make your designs buildable and safe.',
        icon: '👷‍♂️'
      },
      {
        name: 'Technology Team',
        description: 'Software developers and AI specialists who create the tools that bring your ideas to life.',
        icon: '💻'
      }
    ],
    values: [
      {
        title: 'Innovation',
        description: 'We constantly push the boundaries of what\'s possible in home design technology.',
        icon: '🚀'
      },
      {
        title: 'Quality',
        description: 'Every feature and tool is crafted with attention to detail and user experience.',
        icon: '⭐'
      },
      {
        title: 'Accessibility',
        description: 'We believe great design should be available to everyone, regardless of technical expertise.',
        icon: '🤝'
      },
      {
        title: 'Sustainability',
        description: 'Our tools help create environmentally conscious and energy-efficient home designs.',
        icon: '🌱'
      }
    ]
  };

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>{aboutData.title}</h1>
        <p className="mission-statement">{aboutData.mission}</p>
      </div>

      <div className="about-content">
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            {aboutData.offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon">
                  {index === 0 && '🎨'}
                  {index === 1 && '🤖'}
                  {index === 2 && '⚙️'}
                  {index === 3 && '👥'}
                  {index === 4 && '🧮'}
                  {index === 5 && '👁️'}
                </div>
                <p>{offering}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {aboutData.team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {aboutData.values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose-section">
          <h2>Why Choose PlotToPalace?</h2>
          <p>{aboutData.whyChoose}</p>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of satisfied customers who have transformed their plots into palaces</p>
          <div className="cta-buttons">
            <Link to="/design" className="cta-button primary">
              Start Designing
            </Link>
            <Link to="/portfolio" className="cta-button secondary">
              View Our Work
            </Link>
            <Link to="/contact" className="cta-button outline">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
