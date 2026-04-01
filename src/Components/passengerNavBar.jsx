
function PassengerNavBar({ onToggleMenu }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="hamburger" onClick={onToggleMenu} type="button" aria-label="Toggle menu">
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
      </div>
    </nav>
  );
}

export default PassengerNavBar;