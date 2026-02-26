
import DoctorImg from "../assets/images/Doctor-man.png"
import Searchbaar from "../assets/images/Doctors-compo-search-icon.svg"
import DrUpkaran from "../assets/images/dr-upkaran.svg"
import UltaArrow from "../assets/images/ulta-arrow.svg"
        import { useNavigate } from "react-router-dom";

export default function Doctors_componets(){

  const navigate = useNavigate();

return(
  <>
  
  <section className="Doctors-Componets">
<div className="Headings-BtN">

        <p id="top-p-on-section">Doctor</p>
<h1>Top Doctor in Thailand</h1>

</div>

<div className="filter-section">

<div className="filter-section-Search-baar">
<input type="text" placeholder="Search by Name" />
<img id="search-icon-dr" src={Searchbaar} alt="" />
</div>


  <select name="" id="filter-section-Option-baar"><option>Select Speciality</option></select>




<button id="red-search-btn">Search</button>

</div>




<div className="Doctor-box">



<div className="doctor-leftbox">


  <div className="inner-left-dr">
<p>Doctor Speciality</p>
<h2>Doctor Name</h2>
<p>example@Gmail.com</p>
<hr className="line-hr" />
<p> <span>📍</span> Saifee Hospital, Mumbai India</p>
<p> <span>📖</span> MBBS, MD</p>
<p> <span>🩺</span> 08 years Experience</p>
</div>


<div className="dr-bg">
  <img src={DoctorImg} alt="" />
</div>




<button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>

</div>


<div className="doctor-leftbox">


  <div className="inner-left-dr">
<p>Doctor Speciality</p>
<h2>Doctor Name</h2>
<p>example@Gmail.com</p>
<hr className="line-hr" />
<p> <span>📍</span> Saifee Hospital, Mumbai India</p>
<p> <span>📖</span> MBBS, MD</p>
<p> <span>🩺</span> 08 years Experience</p>
</div>


<div className="dr-bg">
  <img src={DoctorImg} alt="" />
</div>




<button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>

</div>


</div>


  </section>

  
  </>
)

}