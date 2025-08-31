import React, { useState } from 'react';
import '../css/RoomInput.css';

const RoomInput = ({ onSubmit }) => {
  const [inputType, setInputType] = useState('roomType');
  const [roomType, setRoomType] = useState('');
  const [customDimensions, setCustomDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });

  const roomTypes = [
    { value: 'hall', label: 'Hall/Living Room', dimensions: { length: 20, width: 15, height: 10 } },
    { value: 'bedroom', label: 'Bedroom', dimensions: { length: 15, width: 12, height: 10 } },
    { value: 'kitchen', label: 'Kitchen', dimensions: { length: 12, width: 10, height: 10 } },
    { value: 'bathroom', label: 'Bathroom', dimensions: { length: 8, width: 6, height: 9 } },
    { value: 'study', label: 'Study Room', dimensions: { length: 12, width: 10, height: 10 } }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let roomData;
    
    if (inputType === 'roomType') {
      const selectedRoom = roomTypes.find(room => room.value === roomType);
      if (selectedRoom) {
        roomData = {
          roomType: selectedRoom.value,
          ...selectedRoom.dimensions
        };
      }
    } else {
      roomData = {
        roomType: 'custom',
        length: parseFloat(customDimensions.length),
        width: parseFloat(customDimensions.width),
        height: parseFloat(customDimensions.height)
      };
    }
    
    if (roomData) {
      onSubmit(roomData);
    }
  };

  const handleCustomDimensionChange = (field, value) => {
    setCustomDimensions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="room-input">
      <h2>📐 Room Specifications</h2>
      
      <div className="input-type-selector">
        <label>
          <input
            type="radio"
            value="roomType"
            checked={inputType === 'roomType'}
            onChange={(e) => setInputType(e.target.value)}
          />
          Select Room Type
        </label>
        <label>
          <input
            type="radio"
            value="custom"
            checked={inputType === 'custom'}
            onChange={(e) => setInputType(e.target.value)}
          />
          Custom Dimensions
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        {inputType === 'roomType' ? (
          <div className="room-type-selection">
            <label htmlFor="roomType">Choose Room Type:</label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option value="">Select a room type...</option>
              {roomTypes.map(room => (
                <option key={room.value} value={room.value}>
                  {room.label} ({room.dimensions.length}' × {room.dimensions.width}' × {room.dimensions.height}')
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="custom-dimensions">
            <h3>Enter Custom Dimensions (in feet)</h3>
            <div className="dimension-inputs">
              <div className="input-group">
                <label htmlFor="length">Length:</label>
                <input
                  type="number"
                  id="length"
                  value={customDimensions.length}
                  onChange={(e) => handleCustomDimensionChange('length', e.target.value)}
                  placeholder="e.g., 20"
                  step="0.1"
                  min="1"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="width">Width:</label>
                <input
                  type="number"
                  id="width"
                  value={customDimensions.width}
                  onChange={(e) => handleCustomDimensionChange('width', e.target.value)}
                  placeholder="e.g., 15"
                  step="0.1"
                  min="1"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="height">Height:</label>
                <input
                  type="number"
                  id="height"
                  value={customDimensions.height}
                  onChange={(e) => handleCustomDimensionChange('height', e.target.value)}
                  placeholder="e.g., 10"
                  step="0.1"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>
        )}
        
        <button type="submit" className="calculate-btn">
          🧮 Calculate Materials
        </button>
      </form>
    </div>
  );
};

export default RoomInput; 