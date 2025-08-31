import React from 'react';
import '../css/Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Smart Villa AI Design',
      description: 'A luxury villa designed by AI, featuring energy-efficient systems and open living spaces.',
      image: '🏠',
      tech: ['AI', 'AngularJS', 'HTML5', 'CSS3'],
      highlights: ['Solar panels', 'Smart lighting', 'Voice-controlled rooms'],
      status: 'Completed',
      area: '3,500 sq ft',
      budget: '$850,000',
      duration: '18 months'
    },
    {
      id: 2,
      title: 'Urban Apartment Makeover',
      description: 'AI-driven renovation of a city apartment, maximizing space and natural light.',
      image: '🏢',
      tech: ['AI', 'AngularJS', 'HTML5'],
      highlights: ['Space optimization', 'Automated blinds', 'Eco-friendly materials'],
      status: 'In Progress',
      area: '1,200 sq ft',
      budget: '$320,000',
      duration: '8 months'
    },
    {
      id: 3,
      title: 'Tiny House Concept',
      description: 'Compact, sustainable tiny house designed for modern living using AI recommendations.',
      image: '🏡',
      tech: ['AI', 'CSS3', 'HTML5'],
      highlights: ['Rainwater harvesting', 'Modular furniture', 'Passive cooling'],
      status: 'Completed',
      area: '450 sq ft',
      budget: '$95,000',
      duration: '6 months'
    },
    {
      id: 4,
      title: 'Eco Mansion Project',
      description: 'A sprawling eco-mansion with AI-optimized energy and water usage, and smart home integration.',
      image: '🏰',
      tech: ['AI', 'AngularJS', 'HTML5', 'CSS3'],
      highlights: ['Geothermal heating', 'Greywater recycling', 'Automated security'],
      status: 'Planned',
      area: '8,500 sq ft',
      budget: '$2.1M',
      duration: '24 months'
    },
    {
      id: 5,
      title: 'Suburban Family Home',
      description: 'A family home design with AI-driven safety features and flexible living spaces.',
      image: '🏘️',
      tech: ['AI', 'HTML5', 'CSS3'],
      highlights: ['Child-safe automation', 'Flexible room dividers', 'Smart kitchen'],
      status: 'Completed',
      area: '2,800 sq ft',
      budget: '$680,000',
      duration: '14 months'
    },
    {
      id: 6,
      title: 'Modern Office Complex',
      description: 'Contemporary office building with AI-optimized workspace design and sustainable features.',
      image: '🏢',
      tech: ['AI', 'React', 'Node.js'],
      highlights: ['Open floor plans', 'Green building materials', 'Smart HVAC systems'],
      status: 'In Progress',
      area: '15,000 sq ft',
      budget: '$3.2M',
      duration: '20 months'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'in progress':
        return 'status-progress';
      case 'planned':
        return 'status-planned';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our completed projects and ongoing work that showcases our expertise in home design and construction</p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <div className="portfolio-image">
              <div className="image-placeholder">{item.image}</div>
              <div className={`status-badge ${getStatusColor(item.status)}`}>
                {item.status}
              </div>
            </div>
            
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              
              <div className="project-details">
                <div className="detail-item">
                  <span className="label">Area:</span>
                  <span className="value">{item.area}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Budget:</span>
                  <span className="value">{item.budget}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Duration:</span>
                  <span className="value">{item.duration}</span>
                </div>
              </div>

              <div className="tech-stack">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {item.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="highlights">
                <h4>Key Features:</h4>
                <ul>
                  {item.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="portfolio-actions">
                <button className="view-project-btn">View Details</button>
                <button className="contact-btn">Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-stats">
        <div className="stat-card">
          <div className="stat-number">{portfolioItems.length}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {portfolioItems.filter(item => item.status === 'Completed').length}
          </div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {portfolioItems.filter(item => item.status === 'In Progress').length}
          </div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {portfolioItems.filter(item => item.status === 'Planned').length}
          </div>
          <div className="stat-label">Planned</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



