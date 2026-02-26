import DoctorImg from "../assets/images/Doctor-man.png";
import Searchbaar from "../assets/images/Doctors-compo-search-icon.svg";
import { useNavigate } from "react-router-dom";
export default function DrLayout() {
  const navigate = useNavigate();
  return (
    <>
      <section className="HospitalBNR bnr2">
        <div>
          <h1>Meet Our Doctors</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            quidem amet sequi tenetur iste aperiam in saepe officia dolore?
            Delectus velit eos at molestiae. Quia officiis reiciendis rem velit
            possimus!
          </p>
        </div>
      </section>

      <section className="Doctors-Componets">
        <div className="Headings-BtN">
          <p id="top-p-on-section">Doctors</p>
          <h1>Top Doctor in Thailand</h1>
        </div>

        <div className="Doctor-box">
          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Doctor Name</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
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
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="dr-bg">
              <img src={DoctorImg} alt="" />
            </div>

               <button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>
          </div>
        </div>
        <div className="Doctor-box">
          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Doctor Name</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
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
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="dr-bg">
              <img src={DoctorImg} alt="" />
            </div>

            <button id="apointment" onClick={() => navigate("/appointment")}>Book appointment</button>
          </div>
        </div>

        <div className="Doctor-box">
          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Doctor Name</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="dr-bg">
              <img src={DoctorImg} alt="" />
            </div>

            <button id="apointment" onClick={() => navigate("/appointment")}>Book appointment</button>
          </div>

          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Doctor Name</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Mumbai India
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="dr-bg">
              <img src={DoctorImg} alt="" />
            </div>

            <button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>
          </div>
        </div>
      </section>

      <hr />

      <div className="srvc-doctor-pg">
        <div className="Doctor-box">
          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Sana</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Thailand bankook sbudv
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="srvs-dr-img">
              <img
                src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?semt=ais_user_personalization&w=740&q=80"
                alt=""
              />
            </div>

               <button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>
          </div>

          <div className="doctor-leftbox">
            <div className="inner-left-dr">
              <p>Doctor Speciality</p>
              <h2>Emila</h2>
              <p>example@Gmail.com</p>
              <hr className="line-hr" />
              <p>
                {" "}
                <span>📍</span> Saifee Hospital, Thailand bankook sbudv
              </p>
              <p>
                {" "}
                <span>📖</span> MBBS, MD
              </p>
              <p>
                {" "}
                <span>🩺</span> 08 years Experience
              </p>
            </div>

            <div className="srvs-dr-img">
              <img
                src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?semt=ais_user_personalization&w=740&q=80"
                alt=""
              />
            </div>

            <button id="apointment" onClick={() => navigate("/appointment")} >Book appointment</button>
          </div>
        </div>
      </div>
    </>
  );
}


