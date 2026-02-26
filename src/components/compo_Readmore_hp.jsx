import { useNavigate } from "react-router-dom";


export default function HospitalDetail() {
  const navigate = useNavigate();

  return (
    <section className="hd-section">

      {/* BACK BTN */}
      <button className="hd-back" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      {/* HERO */}
      <div className="hd-hero">
        <div className="hd-overlay"></div>

        <div className="hd-hero-content">
          <h1>Advanced Care Hospital</h1>
          <p>World class medical services with modern technology</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="hd-container">

        <div className="hd-left">

          <h2>About Hospital</h2>

          <p>
            Our hospital provides high quality healthcare services with
            advanced medical technology. We specialize in multiple
            treatments including cardiac, orthopedic, and oncology care.
          </p>

          <p>
            With experienced doctors and modern facilities, we ensure the
            best treatment for our patients.
          </p>

          <h3>Facilities</h3>

          <ul>
            <li>24/7 Emergency Services</li>
            <li>Advanced ICU Units</li>
            <li>Modern Operation Theatres</li>
            <li>Highly Qualified Doctors</li>
          </ul>

        </div>

        <div className="hd-right">

          <div className="hd-card">
            <h3>Hospital Info</h3>

            <p>📍 Location: India</p>
            <p>📞 +91 9999999999</p>
            <p>✉ info@hospital.com</p>

            <button  onClick={() => navigate("/appointment")} >Book Appointment</button>
          </div>

        </div>

      </div>

    </section>
  );
}

