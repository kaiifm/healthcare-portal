

import logo from "../assets/images/white-logo.svg"

import facebooksvg from "../assets/images/ic_baseline-facebook.svg";
import twitersvg from "../assets/images/line-md_twitter.svg";
import youtubesvg from "../assets/images/line-md_youtube.svg";
import instagarmsvg from "../assets/images/mdi_instagram.svg";
          import { useNavigate } from "react-router-dom";

export default function Footer() {

 
  const navigate = useNavigate();


  return (
<footer className="ft-section">

  <div className="ft-container">

    {/* TOP LOGO ROW */}
    <div className="ft-topbar">
      <div className="ft-logo">
        <img src={logo} alt="" />
  
      </div>
    </div>

    <hr className="ft-divider" />

    {/* MAIN CONTENT */}
    <div className="ft-top">

      {/* LEFT */}
      <div className="ft-col">

        <h4>Contact with Us</h4>

        <p>
          House# D-11, Road# 123, Khalishpur Housing Estate,
          Khulna - 9000
        </p>

        <p>
          Support mail: example@gmail.com <br />
          Opening Hours: Mon-Sat : 9.00am - 18.00pm
        </p>

        <div className="ft-phone">
          <span className="ft-phone-icon">📞</span>
          <p>Emergency 24h: 0123456789</p>
        </div>

        <button className="ft-btn" onClick={() => navigate("/appointment")}  >
          Request An Appointment →
        </button>

      </div>

      {/* MIDDLE */}
      <div className="ft-col">
        <h4>Services Links</h4>

        <ul className="ft-links">
          <li>Blogs</li>
          <li>Events</li>
          <li>Privacy Policy</li>
          <li>Process</li>
          <li>Free Consult</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="ft-col">

        <h4>Subscribe Newsletter</h4>

        <div className="ft-bell">
          🔔
        </div>

        <div className="ft-input">
          <input type="text" placeholder="+Email Address..." />
          <span>→</span>
        </div>

        <div className="ft-social">
          <div><img src={facebooksvg} alt="" /></div>
          <div><img src={twitersvg} alt="" /></div>
          <div><img src={youtubesvg} alt="" /></div>
          <div><img src={instagarmsvg} alt="" /></div>
        </div>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
<div className="ft-bottom">
  <p>
    © 2026 All Rights Reserved — Built & Designed by{" "}
    <a
      href="https://github.com/kaif69z"
      target="_blank"
      rel="noopener noreferrer"
    >
      @kaif69z
    </a>
  </p>
</div>

</footer>
  );
}