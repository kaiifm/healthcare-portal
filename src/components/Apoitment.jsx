import { useNavigate } from "react-router-dom";


export default function AppointmentPage() {
  const navigate = useNavigate();

  return (
    <section className="ap-section">

      {/* BACK BUTTON */}
      <button className="ap-back" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="ap-container">

        {/* LEFT */}
        <div className="ap-left">
          <h2>Book an Appointment</h2>
          <p>
            Fill out the form and our medical team will contact you shortly.
          </p>

          <form className="ap-form">

            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />

            <select>
              <option>Select Treatment</option>
              <option>Heart Surgery</option>
              <option>Knee Replacement</option>
            </select>

            <textarea placeholder="Message" rows="4"></textarea>

            <button type="button">Submit Request</button>

          </form>
        </div>


        {/* RIGHT */}
        <div className="ap-right">

          <div className="ap-card">
            <h3>Contact Info</h3>

            <p>📞 +91 9999999999</p>
            <p>✉ info@email.com</p>
            <p>📍 India</p>

            <div className="ap-time">
              <h4>Working Hours</h4>
              <p>Mon - Sat: 9AM - 7PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}