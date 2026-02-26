import { Link } from "react-router-dom";
import facebooksvg from "../assets/images/ic_baseline-facebook.svg";
import twitersvg from "../assets/images/line-md_twitter.svg";
import youtubesvg from "../assets/images/line-md_youtube.svg";
import instagarmsvg from "../assets/images/mdi_instagram.svg";












export default function Benner() {
  return (

<>



   <section className="header-near-section">
        <p id="top-p-on-section">Medical Tourism</p>

        <div className="benner-inner-contant">
          <div className="left-contant-on-benner">
            <h1>
              Healthcare journey with <br /> triumph medical
            </h1>

            <p>
              We are a healthcare therapy provider focused on the <br />{" "}
              diagnosis and treatment of disorders of the musculoskeletal.
            </p>

            <div className="social-media">
              <p>Follow Us:</p>
              <p>
                <a href="">
                  <img src={facebooksvg} alt="" />
                </a>
              </p>
              <p>
                <a href="">
                  <img src={instagarmsvg} alt="" />
                </a>
              </p>
              <p>
                <a href="">
                  <img src={youtubesvg} alt="" />
                </a>
              </p>
              <p>
                <a href="">
                  <img src={twitersvg} alt="" />
                </a>
              </p>
            </div>
          </div>

          <div className="right-contant-on-bnt">
            <h4>Check Your Treatment Costs</h4>
            <p>We cover all medical needs</p>

            <div className="selection-on-benner">
              <select>
                <option>Select Hospital</option>
              </select>
              <select>
                <option>Select Department</option>
              </select>
              <select>
                <option>Select Procedure</option>
              </select>
            </div>

            <button id="bottom-btn-of-list">Search</button>
          </div>
        </div>
      </section>





</>


  );
}