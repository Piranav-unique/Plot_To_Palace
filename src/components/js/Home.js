import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const homeData = {
    title: 'Welcome to PlotToPalace - Your Complete Home Design Partner!',
    description: 'Design your dream home with ease. Input your requirements and visualize your space with our comprehensive design tools.',
    features: [
      'Intuitive Design Tools: Create floor plans, arrange rooms, and add essential elements',
      'Smart Layout Generation: Get AI-powered layout suggestions tailored to your needs',
      'Material Calculations: Accurate material requirements and cost estimates',
      '3D Visualization: See your designs come to life with our 3D blueprint viewer',
      'Portfolio Showcase: Browse completed projects for inspiration'
    ]
  };

  const plottoInfo = {
    name: 'PlotToPalace',
    tagline: 'From Plot to Palace - Your Vision, Our Expertise',
    benefits: [
      'Professional-grade design tools',
      'Cost-effective planning solutions',
      'Expert material calculations',
      'Beautiful 3D visualizations'
    ]
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{homeData.title}</h1>
          <p className="hero-description">{homeData.description}</p>
          <div className="hero-buttons">
            <Link to="/design" className="cta-button primary">
              Start Designing
            </Link>
            <Link to="/portfolio" className="cta-button secondary">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="house-illustration">
            🏠
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose PlotToPalace?</h2>
        <div className="features-grid">
          {homeData.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {index === 0 && '🎨'}
                {index === 1 && '🤖'}
                {index === 2 && '🧮'}
                {index === 3 && '👁️'}
                {index === 4 && '📚'}
              </div>
              <h3>{feature.split(':')[0]}</h3>
              <p>{feature.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <div className="info-content">
          <h2>{plottoInfo.name}</h2>
          <p className="tagline">{plottoInfo.tagline}</p>
          <div className="benefits-list">
            {plottoInfo.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="checkmark">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Build Your Dream Home?</h2>
        <p>Join thousands of satisfied customers who have transformed their plots into palaces</p>
        <div className="cta-buttons">
          <Link to="/design" className="cta-button primary large">
            Get Started Now
          </Link>
          <Link to="/about" className="cta-button secondary large">
            Learn More
          </Link>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Customer Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
