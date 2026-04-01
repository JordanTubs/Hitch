import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverLogin from "./Pages/DriverLogin";
import DriverHome from "./Pages/DriverHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DriverLogin />} />
        <Route path="/home" element={<DriverHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;