import React from "react";

import Header from "../components/Header.jsx";
import Benner from "../components/benner.jsx";
import Cards from "../components/cards.jsx";
import Benner2 from "../components/benner2.jsx";
import Layout from "../components/layout.jsx";
import Footer from "../components/Footer.jsx";
import Tryy from "../components/try.jsx";
import Doctors_componets from "../components/Doctors_componet.jsx";
import Hospital_components from "../components/Hospitals_componets.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Benner />
      <Cards />
      <Benner2 />
      <Doctors_componets />
      <Hospital_components />
{/* <Tryy/> */}
      <Layout />
      <Footer />
    </>
  );
};

export default Home;
