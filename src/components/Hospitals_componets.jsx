import arrowIcon from "../assets/images/bitcoin-icons_arrow-up-filled.svg";
import BankokHospital from "../assets/images/main_building_cgh_bangkok.png";
import { useNavigate } from "react-router-dom";
export default function Hospital_components() {
  const navigate = useNavigate();

  return (
    <>
      <section className="Hospitals-list-compo">
        <div className="Headin-OF-Compo_HP">
          <p id="top-p-on-section">Hospital</p>
          <div className="HP-BTN">
            <h1>Top Hospital in Thailand</h1>
            <button id="Header-btn" className="hover-btn-forall"  onClick={() => navigate("/Hospitals")}>
              View all Hospitals <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="hospitasl-list-home">
          <div className="HP-box">
            <img src={BankokHospital} alt="" />

            <button className="arrow-btnHP">→</button>

            <h3 className="HospitalName">Bangkok Hospital</h3>
            <p className="HP_Description">
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesettin
            </p>

            <button className="readMoreBtn"   onClick={() => navigate("/Hospitalsmore")}  >Read More ✈︎ </button>
          </div>

          <div className="HP-box">
            <img src={BankokHospital} alt="" />

            <h3 className="HospitalName">Bangkok Hospital</h3>
            <p className="HP_Description">
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesettin
            </p>

      <button className="readMoreBtn"   onClick={() => navigate("/Hospitalsmore")}  >Read More ✈︎ </button>
          </div>

          <div className="HP-box">
            <img src={BankokHospital} alt="" />

            <h3 className="HospitalName">Bangkok Hospital</h3>
            <p className="HP_Description">
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesettin
            </p>

            <button className="readMoreBtn"   onClick={() => navigate("/Hospitalsmore")}  >Read More ✈︎ </button>
          </div>
        </div>
      </section>
    </>
  );
}
