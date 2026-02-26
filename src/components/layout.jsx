import React from "react";
import vector2 from "../assets/images/vector-2.svg";
import Review from "../components/Compo_review";
import mnfImg from "../assets/images/dun011 1.png";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const data = [
    "Oncology",
    "Cosmetic",
    "Neurosurgery",
    "Gynecology",
    "Spine Surgery",
    "Weight Loss",
    "Cardiology",
    "Orthopedics",
  ];

const navigate = useNavigate()

 



  const steps = [
    {
      title: "Share Your Case Details",
      text: "Contact us, share your case details and our team will get in touch with you.",
    },
    {
      title: "Receive Cost Estimate",
      text: "Get medical opinion and cost estimate within 48 hours.",
    },
    {
      title: "Get Received By Our Team",
      text: "Book flights and get received by our team at the airport.",
    },
    {
      title: "Get Treated And Fly Back",
      text: "Get treated and fly back with follow ups.",
    },
  ];

  return (
    <>
      <section className="sp-section">
        <div className="sp-container  ">
          <span className="sp-badge " id="top-p-on-section">
            Specialties
          </span>
          {/* HEADER */}
          <div className="sp-header">
            <div className="sp-header-left">
              <h2>Multi-Specialty Focus</h2>
            </div>

            <button className="sp-btn hover-btn-forall" onClick={() => navigate("/Treatments")} >View all →</button>
          </div>

          {/* GRID */}
          <div className="sp-grid">
            {data.map((item, index) => (
              <div className="sp-card" key={index}>
                <div className="sp-left-icon">
                  {" "}
                  <img src={vector2} alt="" />
                </div>

                <div className="sp-content">
                  <h3>{item}</h3>
                  <p>Advanced Cancer Treatments With Proven Results</p>
                </div>

                <div className="sp-plus">+</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <Review/>


      <section className="pr-section">
        <div className="pr-container">
          <div className="pr-header">
            <span className="pr-badge">Process</span>
            <h2>How Do We Work</h2>
            <p>Consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
          </div>

          <div className="pr-timeline">
            {steps.map((item, i) => (
              <div className="pr-step" key={i}>
                {/* ICON */}
                <div className="pr-circle">
                  <span className="left-btn-arow">{"→"}</span>
                  <span className="top-btn-arow">{"↓"}</span>
                </div>

                {/* OPTIONAL IMAGE / ARROW */}

                {/* CONTENT */}
                <div className="pr-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mini-footer">
        <div className="mn-f-bg">
          <div className="mn-f-left">
            <div className="mn-f-img-part">
              <img src={mnfImg} alt="" />
            </div>
          </div>
          <div className="mn-f-right">
            <h1>
              Looking for professinal & trusted <br />
              medical healthcare?
            </h1>

            <button onClick={() => navigate("/appointment")}>Make Appointment</button>
          </div>
        </div>
      </section>
    </>
  );
}
