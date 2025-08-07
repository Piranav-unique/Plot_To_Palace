import React, { useState } from 'react';
import './App.css';
import RoomInput from './components/RoomInput';
import MaterialCalculator from './components/MaterialCalculator';
import ColorSuggestions from './components/ColorSuggestions';
import ElevationDesigns from './components/ElevationDesigns';
import MaterialBudgetCalculator from './components/MaterialBudgetCalculator';
import Blueprint3DViewer from './components/Blueprint3DViewer';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const [roomData, setRoomData] = useState(null);
  const [materials, setMaterials] = useState(null);

  const handleRoomSubmit = (data) => {
    setRoomData(data);
    // Calculate materials based on room data
    const calculatedMaterials = calculateMaterials(data);
    setMaterials(calculatedMaterials);
  };

  const calculateMaterials = (roomData) => {
    const { roomType, length, width, height } = roomData;
    // Floor area in square feet
    const floorArea = length * width;
    // Wall area (excluding floor and ceiling)
    const wallArea = 2 * (length + width) * height;
    // Material calculations (approximate)
    const materials = {
      tiles: {
        floor: Math.ceil(floorArea * 1.1), // 10% extra for wastage
        wall: Math.ceil(wallArea * 1.1),
        unit: 'sq ft'
      },
      cement: {
        floor: Math.ceil(floorArea * 0.1), // 0.1 bags per sq ft
        wall: Math.ceil(wallArea * 0.05), // 0.05 bags per sq ft
        unit: 'bags (50kg)'
      },
      bricks: {
        wall: Math.ceil(wallArea * 10), // 10 bricks per sq ft
        unit: 'pieces'
      },
      sand: {
        floor: Math.ceil(floorArea * 0.15), // 0.15 cubic ft per sq ft
        wall: Math.ceil(wallArea * 0.08), // 0.08 cubic ft per sq ft
        unit: 'cubic ft'
      }
    };
    return materials;
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/material-budget" className={({ isActive }) => isActive ? 'active' : ''}>
            Material Budget Calculator
          </NavLink>
          <NavLink to="/blueprint-3d" className={({ isActive }) => isActive ? 'active' : ''}>
            Blueprint to 3D
          </NavLink>
        </nav>
        <header className="App-header">
          <h1>🏠 Building Planner</h1>
          <p>Plan your room construction with material calculations and design suggestions</p>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={
              <>
                <RoomInput onSubmit={handleRoomSubmit} />
                {roomData && materials && (
                  <div className="results-section">
                    <MaterialCalculator 
                      roomData={roomData} 
                      materials={materials} 
                    />
                    <ColorSuggestions roomType={roomData.roomType} />
                    <ElevationDesigns roomType={roomData.roomType} />
                  </div>
                )}
              </>
            } />
            <Route path="/material-budget" element={<MaterialBudgetCalculator />} />
            <Route path="/blueprint-3d" element={<Blueprint3DViewer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
