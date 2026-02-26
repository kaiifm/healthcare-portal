import { Link } from "react-router-dom";
import logo from "../assets/images/1 1.svg";
import searchIcon from "../assets/images/Group 180 (1).svg";
import arrowIcon from "../assets/images/bitcoin-icons_arrow-up-filled.svg";

import { useState } from "react";


export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [headerSearchOpen, setHeaderSearchOpen] = useState(false);

  return (
    <header className="Header-full">
      <nav>
        <div className="left-hdr">
          <img className="logo" src={logo} alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Hospitals">Hospitals </Link>
          <Link to="/Doctors">Doctors </Link>
          <Link to="/Treatments">Treatments </Link>
          <Link to="/Cost">Cost </Link>
          <Link to="/Contact">Contact </Link>

          <div className="ShowHide">
            <button id="more-responsive-btn">
              {" "}
              <p>More</p>{" "}
              <span class="material-symbols-outlined arrow-drop-more">
                arrow_drop_down
              </span>{" "}
              <div
                className="Search-bar"
                onClick={() => setOpenSearch(true)}
                style={{ cursor: "pointer" }}
              >
                <img src={searchIcon} alt="searchIcon" />
              </div>
       
       {openSearch && (
  <div className="search-overlay">
    <div className="search-box">

      <button 
        className="close-btn"
        onClick={() => setOpenSearch(false)}
      >
        ×
      </button>

      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Search here..."
          className="search-input"
        />
        <button className="search-btn">
          Search
        </button>
      </div>

    </div>
  </div>
)}







              <span
                class="material-symbols-outlined three-dot-hdr"
                onClick={() => setOpenMenu(true)}
                style={{ cursor: "pointer" }}
              >
                density_medium
              </span>
              <div className="dropdown-more-btn">
                <Link to="/">Home</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Hospitals">Hospitals </Link>
                <Link to="/Doctors">Doctors </Link>
                <Link to="/Treatments">Treatments </Link>
                <Link to="/Cost">Cost </Link>
                <Link to="/Contact">Contact </Link>
              </div>
            </button>
          </div>

          <div
            id="mobile-three-dot-contant"
            className={openMenu ? "active" : ""}
          >
            <div className="navigation-on-top">
              <span
                class="material-symbols-outlined "
                id="close-btn"
                onClick={() => setOpenMenu(false)}
                style={{ cursor: "pointer" }}
              >
                close
              </span>

              <img
                height={"40px"}
                src="https://png.pngtree.com/png-vector/20231201/ourmid/pngtree-call-center-operator-icon-from-commerce-set-communicate-png-image_10801470.png"
                alt=""
              />
            </div>
            <hr />

            <div className="dropdown-more-three-dot">
              <Link to="/">Home</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Hospitals">Hospitals </Link>
              <Link to="/Doctors">Doctors </Link>
              <Link to="/Treatments">Treatments </Link>
              <Link to="/Cost">Cost </Link>
              <Link to="/Contact">Contact </Link>
            </div>
          </div>
        </div>
        <div className="right-hdr">



<div
  className="HeaderSearchTrigger"
  onClick={() => setHeaderSearchOpen(true)}
  style={{ cursor: "pointer" }}
>
  <img src={searchIcon} alt="searchIcon" />
</div>

{headerSearchOpen && (
  <div className="DesktopSearchOverlay">
    <div className="DesktopSearchModal">

      <button
        className="DesktopSearchClose"
        onClick={() => setHeaderSearchOpen(false)}
      >
        ×
      </button>

      <h2 className="DesktopSearchTitle">
        Search 
      </h2>

      <div className="DesktopSearchInputWrapper">
        <input
          type="text"
          placeholder="Type and hit search..."
          className="DesktopSearchInput"
        />
        <button className="DesktopSearchButton">
          Search
        </button>
      </div>

    </div>
  </div>
)}








          <button id="Header-btn">
            Free Consult <img src={arrowIcon} alt="" />
          </button>
        </div>
      </nav>



    </header>
  );
}
