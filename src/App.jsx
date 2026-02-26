import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import "./media.css"
import Home from "./pages/Home";
import About from "./pages/Services";
import Hospitals from "./pages/Hospitals"
import Doctors from "./pages/Doctors"
import Treatments from "./pages/Treatments"
import Cost from "./pages/Cost"
import Contact from "./pages/Contact"
import AppointmentPage from "./components/Apoitment";
import Hospitalsmore from "../src/components/compo_Readmore_hp"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<About />} />
        <Route path="/Hospitals" element={<Hospitals />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Treatments" element={<Treatments />} />
        <Route path="/Cost" element={<Cost />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/appointment" element={<AppointmentPage/>}/>
                <Route path="/Hospitalsmore" element={<Hospitalsmore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;