import React from 'react';
import '../css/MaterialCalculator.css';

const MaterialCalculator = ({ roomData, materials }) => {
  const { roomType, length, width, height } = roomData;
  const floorArea = length * width;
  const wallArea = 2 * (length + width) * height;

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
    <div className="material-calculator">
      <h2>🏗️ Material Requirements</h2>
      
      <div className="room-summary">
        <h3>Room Details</h3>
        <div className="room-info">
          <p><strong>Room Type:</strong> {formatRoomType(roomType)}</p>
          <p><strong>Dimensions:</strong> {length}' × {width}' × {height}'</p>
          <p><strong>Floor Area:</strong> {floorArea} sq ft</p>
          <p><strong>Wall Area:</strong> {wallArea} sq ft</p>
        </div>
      </div>

      <div className="materials-grid">
        <div className="material-category">
          <h3>🧱 Flooring Materials</h3>
          <div className="material-item">
            <span className="material-name">Floor Tiles:</span>
            <span className="material-quantity">{materials.tiles.floor} {materials.tiles.unit}</span>
          </div>
          <div className="material-item">
            <span className="material-name">Cement (Floor):</span>
            <span className="material-quantity">{materials.cement.floor} {materials.cement.unit}</span>
          </div>
          <div className="material-item">
            <span className="material-name">Sand (Floor):</span>
            <span className="material-quantity">{materials.sand.floor} {materials.sand.unit}</span>
          </div>
        </div>

        <div className="material-category">
          <h3>🧱 Wall Materials</h3>
          <div className="material-item">
            <span className="material-name">Wall Tiles:</span>
            <span className="material-quantity">{materials.tiles.wall} {materials.tiles.unit}</span>
          </div>
          <div className="material-item">
            <span className="material-name">Bricks:</span>
            <span className="material-quantity">{materials.bricks.wall} {materials.bricks.unit}</span>
          </div>
          <div className="material-item">
            <span className="material-name">Cement (Walls):</span>
            <span className="material-quantity">{materials.cement.wall} {materials.cement.unit}</span>
          </div>
          <div className="material-item">
            <span className="material-name">Sand (Walls):</span>
            <span className="material-quantity">{materials.sand.wall} {materials.sand.unit}</span>
          </div>
        </div>
      </div>

      <div className="total-summary">
        <h3>📊 Total Materials Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span>Total Tiles:</span>
            <span>{materials.tiles.floor + materials.tiles.wall} {materials.tiles.unit}</span>
          </div>
          <div className="summary-item">
            <span>Total Cement:</span>
            <span>{materials.cement.floor + materials.cement.wall} {materials.cement.unit}</span>
          </div>
          <div className="summary-item">
            <span>Total Bricks:</span>
            <span>{materials.bricks.wall} {materials.bricks.unit}</span>
          </div>
          <div className="summary-item">
            <span>Total Sand:</span>
            <span>{materials.sand.floor + materials.sand.wall} {materials.sand.unit}</span>
          </div>
        </div>
      </div>

      <div className="notes">
        <h4>📝 Notes:</h4>
        <ul>
          <li>Quantities include 10% extra for wastage</li>
          <li>Material requirements are approximate and may vary based on specific construction methods</li>
          <li>Consider adding 5-10% extra for safety margin</li>
          <li>Consult with a professional contractor for exact requirements</li>
        </ul>
      </div>
    </div>
  );
};

export default MaterialCalculator; 