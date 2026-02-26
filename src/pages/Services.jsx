
import Header from "../components/Header"
import ServicesLayout from "../components/servisec-layout"
import Footer from "../components/Footer"
import BennerSrvc from "../components/Compo_benner_srvs"
import Review from "../components/Compo_review";
import React from 'react'

const Services = () => {
  return (
   <>
   
   <Header />
<BennerSrvc/>
     <ServicesLayout />
     <Review/>
     <Footer />


   </>
  )
}

export default Services