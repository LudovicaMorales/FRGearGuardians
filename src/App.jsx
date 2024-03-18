import "./App.css";

import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Consult from "./components/Consult";
import Schedule from "./components/Schedule";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/consult" element={<Consult/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
