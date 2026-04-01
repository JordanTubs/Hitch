// React hooks - useState manages data that can change, useNavigate lets us switch pages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/DriverLogin.css";

function App() {

  // useNavigate hook - lets us redirect to another page programmatically
  const navigate = useNavigate();

  // STATE - these are variables that React watches for changes and re-renders the UI
  const [email, setEmail] = useState("");        // stores what user types in email field
  const [password, setPassword] = useState("");  // stores what user types in password field
  const [showPass, setShowPass] = useState(false); // toggles password visibility
  const [errorMsg, setErrorMsg] = useState("");  // stores error message to show user
  const [loading, setLoading] = useState(false); // tracks if sign in is in progress
  const [focused, setFocused] = useState("");    // tracks which input field is focused

  // FUNCTION - runs when user clicks Sign In button
  function handleSignIn() {
    // check if fields are empty, show error if so
    if (email === "" || password === "") {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    setErrorMsg("");      // clear any previous error
    setLoading(true);     // show loading spinner on button
    setTimeout(() => {
      setLoading(false);  // hide loading spinner
      navigate("/home");  // redirect to Driver Home page after 1.5 seconds
    }, 1500);
  }

  // FUNCTION - runs when user clicks Forgot Password
  function handleForgotPassword() {
    // require email before sending reset link
    if (email === "") {
      alert("Please enter your email first.");
      return;
    }
    alert("Password reset link sent to: " + email);
  }

  // FUNCTION - toggles show/hide password
  function handleShowPass() {
    setShowPass(!showPass); // flips true to false and false to true
  }

  // RETURN - this is the UI/HTML that gets rendered on screen
  return (
    <div className="hitch-root"> {/* main wrapper - full screen flex container */}

      {/* LEFT PANEL - branding section visible on desktop */}
      <div className="left-panel">
        <p className="brand-tag">Driver Portal</p>
        <h1 className="brand-headline">
          Drive.<br />
          <span>Earn.</span>
          Thrive.
        </h1>
        <p className="brand-sub">
          Join the HiTCH driver network and start earning
          on your schedule. Every ride is a new destination.
        </p>
        <div className="divider-line" /> {/* decorative red line */}
      </div>

      {/* RIGHT PANEL - login form section */}
      <div className="right-panel">

        {/* LOGO - HiTCH branding at top of login form */}
        <div className="logo-wrap">
          <div className="logo-circle">🚗</div>
          <div className="logo-text">
            <span className="logo-hitch">
              Hi<span>TCH</span> {/* TCH is red, Hi is white */}
            </span>
            <span className="logo-driver">DRIVER</span>
          </div>
        </div>

        {/* LOGIN CARD - the actual form */}
        <div className="login-card">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Sign in to your driver account</p>

          {/* EMAIL FIELD - adds "active" class when focused to highlight label red */}
          <div className={"field-group" + (focused === "email" ? " active" : "")}>
            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              placeholder="Value"
              value={email}
              onChange={(e) => setEmail(e.target.value)}   // updates email state on every keystroke
              onFocus={() => setFocused("email")}           // marks email as the focused field
              onBlur={() => setFocused("")}                 // clears focused when user leaves field
            />
          </div>

          {/* PASSWORD FIELD - same active class logic as email */}
          <div className={"field-group" + (focused === "password" ? " active" : "")}>
            <label className="field-label">Password</label>
            <div className="field-input-wrap"> {/* wrapper needed to position Show/Hide button */}
              <input
                className="field-input"
                type={showPass ? "text" : "password"} // switches between visible and hidden text
                placeholder="Value"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                style={{ paddingRight: "4rem" }} // makes room for Show/Hide button
              />
              {/* SHOW/HIDE button overlaid on the right side of the input */}
              <button className="toggle-pass" onClick={handleShowPass}>
                {showPass ? "Hide" : "Show"} {/* text changes based on showPass state */}
              </button>
            </div>
          </div>

          {/* ERROR MESSAGE - only shows if errorMsg is not empty */}
          {errorMsg !== "" && (
            <p className="error-msg">{errorMsg}</p>
          )}

          {/* SIGN IN BUTTON - adds "loading" class to show spinner when loading is true */}
          <button
            className={"sign-in-btn" + (loading ? " loading" : "")}
            onClick={handleSignIn}
          >
            Sign In
          </button>

          {/* FORGOT PASSWORD link styled as a button */}
          <button className="forgot-link" onClick={handleForgotPassword}>
            Forgot password?
          </button>

        </div>

        {/* FOOTER - copyright notice */}
        <p className="footer-note">© 2025 HiTCH. All rights reserved.</p>

      </div>
    </div>
  );
}

// exports this component so App.js can import and use it as a route
export default App;