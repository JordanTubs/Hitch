import { useNavigate } from "react-router-dom";


function PassengerSideBar({ menuOpen, toggleMenu }) {
    const navigate = useNavigate();
    function handleLogout() {
        toggleMenu();
        navigate('/login');
    }


  return (
    <>
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
          <button className="menu-logout" onClick={handleLogout} type="button">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default PassengerSideBar;