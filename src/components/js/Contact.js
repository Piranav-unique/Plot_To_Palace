import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'general'
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = {
    address: '123 Design Street, Creative District, City, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@plottopalace.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
    social: {
      facebook: 'https://facebook.com/plottopalace',
      twitter: 'https://twitter.com/plottopalace',
      instagram: 'https://instagram.com/plottopalace',
      linkedin: 'https://linkedin.com/company/plottopalace'
    }
  };

  const projectTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'residential', label: 'Residential Design' },
    { value: 'commercial', label: 'Commercial Design' },
    { value: 'renovation', label: 'Renovation Project' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'quote', label: 'Get Quote' }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team of experts. We're here to help bring your design dreams to life.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info-card">
            <h3>📍 Our Location</h3>
            <p>{contactInfo.address}</p>
          </div>
          
          <div className="contact-info-card">
            <h3>📞 Phone</h3>
            <p>{contactInfo.phone}</p>
          </div>
          
          <div className="contact-info-card">
            <h3>✉️ Email</h3>
            <p>{contactInfo.email}</p>
          </div>
          
          <div className="contact-info-card">
            <h3>🕒 Business Hours</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{contactInfo.hours}</p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h3>Send us a Message</h3>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                  >
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter message subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="social-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link facebook">
            📘 Facebook
          </a>
          <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
            🐦 Twitter
          </a>
          <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
            📷 Instagram
          </a>
          <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            💼 LinkedIn
          </a>
        </div>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does a typical project take?</h4>
            <p>Project timelines vary based on complexity. Simple designs take 2-4 weeks, while complex projects can take 2-6 months.</p>
          </div>
          <div className="faq-item">
            <h4>Do you provide cost estimates?</h4>
            <p>Yes, we provide detailed cost estimates including materials, labor, and timeline projections.</p>
          </div>
          <div className="faq-item">
            <h4>Can you work with existing structures?</h4>
            <p>Absolutely! We specialize in both new construction and renovation projects.</p>
          </div>
          <div className="faq-item">
            <h4>What areas do you serve?</h4>
            <p>We currently serve the entire metropolitan area and surrounding suburbs within a 50-mile radius.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
