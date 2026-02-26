import React from 'react'
import ImgMatchine from "../assets/images/Frame 11.png"
import HeartImg from "../assets/images/Frame 12.png"
import rightArrow from "../assets/images/right-arrow.svg"
import leftArow from "../assets/images/arro-left.svg"

export default function Benner2() {

  return (


   <>


<section className="second-benner" >

<div className="second-benner-inner-contant" >
<div className="second-benner-left-side">
<img id="ImgMatchine" src={ImgMatchine} alt="" />


<div className="second-benner-left-side-bottom-contant">
<div className="smallP">
<p> <span><img src={rightArrow} alt="" /></span> Seamless Travel & Treatment</p>
<p> <span><img src={rightArrow} alt="" /></span> Personalized Care Plans</p>
<p> <span><img src={rightArrow} alt="" /></span> Affordable Healthcare Solutions</p>
</div>

<img id="HeartImg" src={HeartImg} alt="" />

</div>

</div>
<div className="second-benner-right-side">
    <div className="cards-headig">
                <p id="top-p-on-section">Our Journey</p>
                <h2 className="Heading-text"> Your Health Our <br className='break'/> Priority </h2>
                </div>



             <div className="form-box">


    <form id="patientForm">
      
      <div className="input-group">
        <input type="text" required />
        <label>Patient Name</label>
      </div>

      <div className="input-group">
        <input type="tel" required />
        <label>Patient Phone</label>
      </div>

      <div className="input-group">
        <input type="email" required />
        <label>Patient Email</label>
      </div>

      <div className="input-group">
        <input id="Facing-Issue-input" type="text" required />
        <label>Facing Issues...</label>
      </div>

      <div className="drop-area">
        Drag & Drop a file here
      </div>

      <input type="file" id="fileUpload" hidden />

      <label htmlFor="fileUpload" className="file-btn">
        Add File
      </label>

      <button type="submit" className="submit-btn">
        Get Free Quote
      </button>

    </form>
  </div>


</div>

</div>

</section>




<script>

  




</script>
   </>


  )

}





