import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Import all components
import Home from './components/js/Home';
import About from './components/js/About';
import Portfolio from './components/js/Portfolio';
import RoomInput from './components/js/RoomInput';
import MaterialCalculator from './components/js/MaterialCalculator';
import ColorSuggestions from './components/js/ColorSuggestions';
import ElevationDesigns from './components/js/ElevationDesigns';
import MaterialBudgetCalculator from './components/js/MaterialBudgetCalculator';
import Blueprint3DViewer from './components/js/Blueprint3DViewer';
import Contact from './components/js/Contact';
import Login from './components/js/Login';
import Register from './components/js/Register';

function App() {
  const [roomData, setRoomData] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [user, setUser] = useState(null);

  const handleRoomSubmit = (data) => {
    setRoomData(data);
    // Calculate materials based on room data
    const calculatedMaterials = calculateMaterials(data);
    setMaterials(calculatedMaterials);
  };

  const calculateMaterials = (roomData) => {
    const { length, width, height } = roomData;
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

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">
            <NavLink to="/" end className="brand-link">
              🏠 PlotToPalace
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
              Portfolio
            </NavLink>
            <NavLink to="/design" className={({ isActive }) => isActive ? 'active' : ''}>
              Design
            </NavLink>
            <NavLink to="/material-budget" className={({ isActive }) => isActive ? 'active' : ''}>
              Budget Calculator
            </NavLink>
            <NavLink to="/blueprint-3d" className={({ isActive }) => isActive ? 'active' : ''}>
              3D Blueprint
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
            {user ? (
              <>
                <span className="user-welcome">Welcome, {user.name}!</span>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                Login
              </NavLink>
            )}
          </div>
        </nav>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/design" element={
              <>
                <div className="design-header">
                  <h1>🏗️ Room Design & Material Calculator</h1>
                  <p>Design your room and get detailed material requirements and cost estimates</p>
                </div>
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>PlotToPalace</h3>
              <p>Your trusted partner in home design and construction planning</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><NavLink to="/design">Room Design</NavLink></li>
                <li><NavLink to="/material-budget">Budget Calculator</NavLink></li>
                <li><NavLink to="/blueprint-3d">3D Blueprint</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 PlotToPalace. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
