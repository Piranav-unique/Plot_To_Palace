import React from 'react';
import '../css/ElevationDesigns.css';

const ElevationDesigns = ({ roomType }) => {
  const designs = {
    hall: [
      {
        id: 1,
        name: "Modern Living Room",
        description: "Contemporary design with large windows and open concept",
        features: ["Large windows", "Open floor plan", "Modern facade", "Minimalist design"],
        style: "modern"
      },
      {
        id: 2,
        name: "Traditional Hall",
        description: "Classic design with elegant proportions and traditional elements",
        features: ["Symmetrical design", "Classical columns", "Traditional facade", "Elegant proportions"],
        style: "traditional"
      }
    ],
    bedroom: [
      {
        id: 1,
        name: "Cozy Bedroom",
        description: "Warm and inviting bedroom design with comfortable proportions",
        features: ["Cozy windows", "Warm facade", "Comfortable design", "Peaceful atmosphere"],
        style: "cozy"
      },
      {
        id: 2,
        name: "Modern Master Bedroom",
        description: "Contemporary master bedroom with luxury elements",
        features: ["Large windows", "Modern facade", "Luxury design", "Spacious layout"],
        style: "modern"
      }
    ],
    kitchen: [
      {
        id: 1,
        name: "Modern Kitchen",
        description: "Contemporary kitchen with efficient layout and modern appliances",
        features: ["Efficient layout", "Modern appliances", "Clean design", "Functional space"],
        style: "modern"
      },
      {
        id: 2,
        name: "Traditional Kitchen",
        description: "Classic kitchen design with warm and inviting atmosphere",
        features: ["Warm design", "Traditional elements", "Cozy atmosphere", "Functional layout"],
        style: "traditional"
      }
    ],
    bathroom: [
      {
        id: 1,
        name: "Modern Bathroom",
        description: "Contemporary bathroom with clean lines and modern fixtures",
        features: ["Clean design", "Modern fixtures", "Efficient layout", "Spa-like atmosphere"],
        style: "modern"
      },
      {
        id: 2,
        name: "Luxury Bathroom",
        description: "High-end bathroom with premium materials and spacious design",
        features: ["Premium materials", "Spacious design", "Luxury fixtures", "Elegant layout"],
        style: "luxury"
      }
    ],
    study: [
      {
        id: 1,
        name: "Modern Study",
        description: "Contemporary study room with focus on productivity and comfort",
        features: ["Productive design", "Modern layout", "Comfortable workspace", "Good lighting"],
        style: "modern"
      },
      {
        id: 2,
        name: "Classic Study",
        description: "Traditional study room with timeless design elements",
        features: ["Timeless design", "Classical elements", "Quiet atmosphere", "Elegant layout"],
        style: "traditional"
      }
    ],
    custom: [
      {
        id: 1,
        name: "Modern Custom Room",
        description: "Contemporary design adaptable to various room types",
        features: ["Flexible design", "Modern facade", "Adaptable layout", "Clean lines"],
        style: "modern"
      },
      {
        id: 2,
        name: "Traditional Custom Room",
        description: "Classic design with traditional elements",
        features: ["Traditional facade", "Classical elements", "Timeless design", "Elegant proportions"],
        style: "traditional"
      }
    ]
  };

  const formatRoomType = (type) => {
    const typeMap = {
      'hall': 'Hall/Living Room',
      'bedroom': 'Bedroom',
      'kitchen': 'Kitchen',
      'bathroom': 'Bathroom',
      'study': 'Study Room',
      'custom': 'Custom Room'
    };
    return typeMap[type] || type;
  };

  const roomDesigns = designs[roomType] || designs.custom;

  return (
    <div className="elevation-designs">
      <h2>🏛️ Elevation Designs</h2>
      <p className="room-type-label">Design suggestions for {formatRoomType(roomType)}</p>
      
      <div className="designs-grid">
        {roomDesigns.map((design) => (
          <div key={design.id} className={`design-card ${design.style}`}>
            <div className="design-header">
              <h3>{design.name}</h3>
              <span className={`style-badge ${design.style}`}>
                {design.style.charAt(0).toUpperCase() + design.style.slice(1)}
              </span>
            </div>
            
            <div className="design-visual">
              <div className="design-placeholder">
                <span className="design-icon">🏠</span>
              </div>
            </div>
            
            <div className="design-description">
              <p>{design.description}</p>
            </div>
            
            <div className="design-features">
              <h4>Key Features:</h4>
              <ul>
                {design.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="design-actions">
              <button className="view-details-btn">View Details</button>
              <button className="save-design-btn">Save Design</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="design-tips">
        <h3>💡 Design Tips:</h3>
        <ul>
          <li>Consider the orientation for natural light</li>
          <li>Choose materials that complement your color scheme</li>
          <li>Ensure proper ventilation and airflow</li>
          <li>Plan for future expansion if needed</li>
          <li>Consider local building codes and regulations</li>
        </ul>
      </div>
    </div>
  );
};

export default ElevationDesigns; 