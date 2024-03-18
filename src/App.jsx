import "./App.css";

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Consult from "./components/Consult";
import Schedule from "./components/Schedule";
import Error404 from "./Pages/Error404";
import Error500 from "./Pages/Error500";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Outlet />
              </div>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/consult" element={<Consult />} />
          </Route>

          {/* Rutas sin navbar */}
          <Route path="/404" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
