import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverLogin from "./Pages/DriverLogin";
import DriverHome from "./Pages/DriverHome";
import PassengerHome from "./Pages/PassengerHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DriverLogin />} />
        <Route path="/home" element={<DriverHome />} />
        <Route path="/passenger-home" element={<PassengerHome />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;