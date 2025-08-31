import React from 'react';
import '../css/ColorSuggestions.css';

const ColorSuggestions = ({ roomType }) => {
  const colorPalettes = {
    hall: {
      interior: {
        primary: '#F5F5DC', // Beige
        secondary: '#8B4513', // Saddle Brown
        accent: '#DAA520', // Goldenrod
        neutral: '#F8F8FF' // Ghost White
      },
      exterior: {
        primary: '#8B7355', // Dark Khaki
        secondary: '#F5DEB3', // Wheat
        accent: '#CD853F' // Peru
      }
    },
    bedroom: {
      interior: {
        primary: '#E6E6FA', // Lavender
        secondary: '#4B0082', // Indigo
        accent: '#9370DB', // Medium Purple
        neutral: '#F0F8FF' // Alice Blue
      },
      exterior: {
        primary: '#708090', // Slate Gray
        secondary: '#E0E6FA', // Light Lavender
        accent: '#6A5ACD' // Slate Blue
      }
    },
    kitchen: {
      interior: {
        primary: '#FFF8DC', // Cornsilk
        secondary: '#8B0000', // Dark Red
        accent: '#FF6347', // Tomato
        neutral: '#FDF5E6' // Old Lace
      },
      exterior: {
        primary: '#F5F5DC', // Beige
        secondary: '#8B4513', // Saddle Brown
        accent: '#D2691E' // Chocolate
      }
    },
    bathroom: {
      interior: {
        primary: '#F0FFFF', // Azure
        secondary: '#4682B4', // Steel Blue
        accent: '#87CEEB', // Sky Blue
        neutral: '#F8F8FF' // Ghost White
      },
      exterior: {
        primary: '#B0C4DE', // Light Steel Blue
        secondary: '#F0F8FF', // Alice Blue
        accent: '#4169E1' // Royal Blue
      }
    },
    study: {
      interior: {
        primary: '#F5F5F5', // White Smoke
        secondary: '#2F4F4F', // Dark Slate Gray
        accent: '#708090', // Slate Gray
        neutral: '#FFFFFF' // White
      },
      exterior: {
        primary: '#696969', // Dim Gray
        secondary: '#F5F5F5', // White Smoke
        accent: '#2F4F4F' // Dark Slate Gray
      }
    },
    custom: {
      interior: {
        primary: '#F5F5DC', // Beige
        secondary: '#8B4513', // Saddle Brown
        accent: '#DAA520', // Goldenrod
        neutral: '#F8F8FF' // Ghost White
      },
      exterior: {
        primary: '#8B7355', // Dark Khaki
        secondary: '#F5DEB3', // Wheat
        accent: '#CD853F' // Peru
      }
    }
  };

  const palette = colorPalettes[roomType] || colorPalettes.custom;

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

  return (
    <div className="color-suggestions">
      <h2>🎨 Color Suggestions</h2>
      <p className="room-type-label">For {formatRoomType(roomType)}</p>
      
      <div className="color-sections">
        <div className="color-section">
          <h3>🏠 Interior Colors</h3>
          <div className="color-palette">
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Primary: {palette.interior.primary}</span>
              </div>
            </div>
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Secondary: {palette.interior.secondary}</span>
              </div>
            </div>
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Accent: {palette.interior.accent}</span>
              </div>
            </div>
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Neutral: {palette.interior.neutral}</span>
              </div>
            </div>
          </div>
          
          <div className="color-tips">
            <h4>💡 Interior Tips:</h4>
            <ul>
              <li>Use primary color for walls</li>
              <li>Secondary color for furniture and accents</li>
              <li>Accent color for decorative elements</li>
              <li>Neutral color for ceilings and trim</li>
            </ul>
          </div>
        </div>

        <div className="color-section">
          <h3>🏡 Exterior Colors</h3>
          <div className="color-palette">
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Primary: {palette.exterior.primary}</span>
              </div>
            </div>
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Secondary: {palette.exterior.secondary}</span>
              </div>
            </div>
            <div className="color-item">
              <div className="color-info">
                <span className="color-name">Accent: {palette.exterior.accent}</span>
              </div>
            </div>
          </div>
          
          <div className="color-tips">
            <h4>💡 Exterior Tips:</h4>
            <ul>
              <li>Primary color for main walls</li>
              <li>Secondary color for trim and details</li>
              <li>Accent color for doors and windows</li>
              <li>Consider weather resistance for exterior paints</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSuggestions; 