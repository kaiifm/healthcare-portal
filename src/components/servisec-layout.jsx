import DoctorImg from "../assets/images/Doctor-man.png";

    import { useNavigate } from "react-router-dom";
     

export default function ServicesLayout() {
    const navigate = useNavigate();
  return (
    <>
      <div className="srvc-top">
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the,
          </p>
        </div>

        <div>
          {" "}
          <span>📞</span>
          <h4>Emergency 24h: 0123456789</h4>
        </div>
      </div>

      <section className="srvc-middle-contant">
        <div className="srvs-left">
          <h1>
            Why Choose Thailand for Cancer <br /> Treatment?
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy text ever since the 1500s, <br /> when an unknown
            printer took a galley of type and <br />
            scrambled it to make a type specimen book. It has <br /> survived
            not only five centuries, but also the leap into <br /> electronic
          </p>
        </div>
        <div className="srvs-right">
          <div className="srvc-small-bx">
            <p>Receive quotation(s) within 48 Hours </p> <span>→</span>
          </div>

          <div className="srvc-small-bx">
            <p>Get received by us at destination </p> <span>→</span>
          </div>

          <div className="srvc-small-bx">
            <p>Send your reports and preferences to us </p> <span>→</span>
          </div>

          <div className="srvc-small-bx">
            <p>Get treated and fly back </p> <span>→</span>
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="ap-container">
          {/* LEFT SIDE */}
          <div className="ap-left">
            <h2>Advanced Treatment Options</h2>

            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              <br />
              <br />
              We’ve redesigned the doctor’s office experience to fit your life,
              put you at ease, and treat you as a whole person. We create safe
              and inviting spaces,ask meaningful questions, give you time to
              talk, and listen without judgment. Then we work with you on a plan
              to help you feel your best — whether you want to sleep better,
              feel calmer, worry less, or get a better handle on your mood.
            </p>

            <h1>Internationally Accredited Hospitals</h1>
            <br />
            <br />
            <p>
              The major reason Middle Eastern patients are attracted to the
              country for cancer treatment is the high-quality healthcare and
              the presence of internationally accredited hospitals. Around 60+
              hospitals are JCI-accredited and provide high-quality medical
              services.
            </p>

            <div className="srvc-left-boxs">
              <div>
                <p>📞</p>
                <p>Focusd Customer</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  posuere et dolor sed vehicula
                </p>
              </div>

              <div>
                <p>📞</p>
                <p>24/7 Care</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  posuere et dolor sed vehicula
                </p>
              </div>

              <div>
                <p>📞</p>
                <p>Timely Care</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  posuere et dolor sed vehicula
                </p>
              </div>
            </div>

            <div className="mt-1">
              <h1>Different Types of Cancer Treatment and their Costs</h1>
              <p>
                Cancer encompasses a wide range of diseases, each affecting
                different parts of the body. The cost of chemotherapy in
                Thailand ranges from USD 2500 to USD 3000 per cycle.Common types
                of cancer treatment include:
              </p>
            </div>

            <div className="srvs-desis">
              <div className="srvc-text-contant">
                <div>
                  {" "}
                  <h3> 1. Lung cancer treatment</h3> <p>-</p>{" "}
                </div>

                <p>
                  It is the most severe type of cancer that starts with abnormal
                  cell growth in the lungs, leading to tumour formation. Common
                  surgeries include lobectomy, pneumonectomy, or wedge
                  resection. <br />
                  <br />
                  The average cost of lung cancer treatment in Thailand ranges
                  from Baht 20000 to Baht 28000.
                </p>
              </div>

              <div className="all-srvs-boxs">
                <div className="hover-hide-block">
                  <div className="srvc-small-bx">
                    <p>2. Breast cancer treatment</p> <span>+</span>
                  </div>

                  <p className="inner-hide-contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio soluta iure vero corrupti nisi numquam non commodi
                    deleniti, blanditiis alias cumque voluptatibus, similique
                    architecto porro earum eveniet. Temporibus, doloribus
                    quisquam. Nesciunt nemo molestias quia laudantium nihil vel?
                    Quod, a.
                  </p>
                </div>

                <div className="hover-hide-block">
                  <div className="srvc-small-bx">
                    <p>3. Ovarian cancer treatment</p> <span>+</span>
                  </div>

                  <p className="inner-hide-contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio soluta iure vero corrupti nisi numquam non commodi
                    deleniti, blanditiis alias cumque voluptatibus, similique
                    architecto porro earum eveniet. Temporibus, doloribus
                    quisquam. Nesciunt nemo molestias quia laudantium nihil vel?
                    Quod, a.
                  </p>
                </div>

                <div className="hover-hide-block">
                  <div className="srvc-small-bx">
                    <p>4. Cervical cancer treatment</p> <span>+</span>
                  </div>

                  <p className="inner-hide-contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio soluta iure vero corrupti nisi numquam non commodi
                    deleniti, blanditiis alias cumque voluptatibus, similique
                    architecto porro earum eveniet. Temporibus, doloribus
                    quisquam. Nesciunt nemo molestias quia laudantium nihil vel?
                    Quod, a.
                  </p>
                </div>
                <div className="hover-hide-block">
                  <div className="srvc-small-bx">
                    <p>5. Stomach cancer treatment</p> <span>+</span>
                  </div>

                  <p className="inner-hide-contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio soluta iure vero corrupti nisi numquam non commodi
                    deleniti, blanditiis alias cumque voluptatibus, similique
                    architecto porro earum eveniet. Temporibus, doloribus
                    quisquam. Nesciunt nemo molestias quia laudantium nihil vel?
                    Quod, a.
                  </p>
                </div>

                <div className="hover-hide-block">
                  <div className="srvc-small-bx">
                    <p>6. Liver cancer treatment</p> <span>+</span>
                  </div>

                  <p className="inner-hide-contant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio soluta iure vero corrupti nisi numquam non commodi
                    deleniti, blanditiis alias cumque voluptatibus, similique
                    architecto porro earum eveniet. Temporibus, doloribus
                    quisquam. Nesciunt nemo molestias quia laudantium nihil vel?
                    Quod, a.
                  </p>
                </div>
              </div>
            </div>

            <div className="srvc-doctor-pg">
              <h1>Doctors for Cancer in Thailand </h1>

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

                  <button id="apointment"  onClick={() => navigate("/appointment")} >Book appointment</button>
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

                  <button id="apointment"  onClick={() => navigate("/appointment")} >Book appointment</button>
                </div>
              </div>
            </div>

            <hr />
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="ap-right">
            <div className="ap-form-card">
              <h3>Book An Appointment</h3>
              <p className="ap-sub">
                By submitting this form you are agreeing to our Privacy Policy,
                We guarantee not to disclose your information. lore
              </p>

              <form>
                <div className="ap-grid">
                  <input type="text" placeholder="*Full Name" />
                  <input type="email" placeholder="*Email Address" />

                  <input type="text" placeholder="*Phone Number" />
                  <select>
                    <option>Select Treatment</option>
                  </select>

                  <select>
                    <option>Choose doctor</option>
                  </select>
                  <input type="date" />
                </div>

                <textarea placeholder="Note if any..."></textarea>

                <button className="ap-btn"  >Appointment →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}




