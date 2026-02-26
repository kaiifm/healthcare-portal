import vector2 from "../assets/images/vector-2.svg";
import vector4 from "../assets/images/Vector-4.svg";
import vector5 from "../assets/images/vector-5.svg";
import vector6 from "../assets/images/vector-6.svg";
import vector7 from "../assets/images/vector-7.svg";
import vector8 from "../assets/images/vector-8.svg";
import vector1 from "../assets/images/Vector-1.svg";
import vector from "../assets/images/vector.svg";
import carbenCoster from "../assets/images/carbon_cost.svg";

export default function cards() {
  return (
    <>
   






      <section className="second-sction-home">
              <div className="cards-headig">
                <p id="top-p-on-section">Services</p>
                <h2 className="Heading-text"> Our Services Cover Every Need</h2>
                </div>
  <div className="boxesWraper">

    {/* 1 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector} alt="" />
      </div>
      <p>Visa Support</p>
      <p>Assistance with visa applications and documentation</p>
    </div>

    {/* 2 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector2} alt="" />
      </div>
      <p>Medical Treatment</p>
      <p>Coordination with top medical professionals</p>
    </div>

    {/* 3 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector7} alt="" />
      </div>
      <p>Local Accommodation</p>
      <p>Arrangement of comfortable lodging</p>
    </div>

    {/* 4 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={carbenCoster} alt="" />
      </div>
      <p>Lowest cost guarantee</p>
      <p>Affordable healthcare options</p>
    </div>

    {/* 5 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector4} alt="" />
      </div>
      <p>Seamless travel planning</p>
      <p>Planning for smooth medical journeys</p>
    </div>

    {/* 6 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector8} alt="" />
      </div>
      <p>Pre-Travel Consultations</p>
      <p>Consult before your travel</p>
    </div>

    {/* 7 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector1} alt="" />
      </div>
      <p>Travel Booking</p>
      <p>Flight and travel management</p>
    </div>

    {/* 8 */}
    <div className="myFram special-box">
      <div className="logo-bg">
        <img src={vector6} alt="" />
      </div>
      <p>Language Support</p>
      <p>Interpreter and language help</p>
    </div>

    {/* 9 */}
    <div className="myFram">
      <div className="logo-bg">
        <img src={vector5} alt="" />
      </div>
      <p>On Ground Support</p>
      <p>Support during your stay</p>
    </div>

  </div>
</section>

    </>
  );
}
