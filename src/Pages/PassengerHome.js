import { useState } from 'react';
import '../Styles/PassengerHome.css';

function PassengerHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div className="home-root">
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu} />}

      <aside className={`side-menu ${menuOpen ? 'side-menu-open' : ''}`}>
        <div className="menu-header">
          <div className="menu-avatar">P</div>
          <div>
            <div className="menu-passenger-name">Passenger</div>
            <div className="menu-passenger-email">pass@gmail.com</div>
          </div>
        </div>

        <div className="menu-items">
          <button className="menu-item" type="button">
            My Profile
          </button>
          <button className="menu-item" type="button">
            My Rides
          </button>
          <button className="menu-item" type="button">
            Route
          </button>
          <button className="menu-item" type="button">
            About Us
          </button>
          <button className="menu-item" type="button">
            Notifications
          </button>
          <button className="menu-item" type="button">
            Help & Support
          </button>
          <button className="menu-item" type="button">
            Settings
          </button>
        </div>

        <div className="menu-footer">
          <button className="menu-logout" type="button">
            Logout
          </button>
        </div>
      </aside>

      <header className="navbar">
        <div className="nav-left">
          <button className="hamburger" onClick={toggleMenu} type="button" aria-label="Toggle menu">
            ☰
          </button>

          <div className="nav-logo">
            <div className="nav-logo-circle">🚗</div>
            <div className="nav-logo-text">HITCH</div>
          </div>
        </div>

        <div className="nav-right">
          <button className="nav-link nav-link-active" type="button">
            Home
          </button>
          <button className="nav-link" type="button">
            My Rides
          </button>
          <button className="nav-link" type="button">
            Book Ride
          </button>
          <button className="nav-link" type="button">
            Help
          </button>

          <button className="settings-btn" type="button" aria-label="Settings">
            ⚙
          </button>
        </div>
      </header>

      <main className="home-main">
        <div className="cards-container">
          <div className="card">
            <div className="card-image" />
            <button className="card-btn" type="button">
              Saved Places
            </button>
          </div>
          <div className="card">
            <div className="card-image" />
            <button className="card-btn" type="button">
              Book a Ride
            </button>
          </div>
          <div className="card">
            <div className="card-image" />
            <button className="card-btn" type="button">
              Ride History
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PassengerHome;