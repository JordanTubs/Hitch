import { useState } from 'react';
import '../Styles/PassengerHome.css';
import PassengerNavBar from '../Components/passengerNavBar';
import PassengerSideBar from '../Components/passengerSideBar';

function PassengerHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div className="home-root">
      <PassengerSideBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <PassengerNavBar onToggleMenu={toggleMenu} />

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