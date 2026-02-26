import React from 'react'

const CompoCost = () => {
  return (
    <>
    <section class="cost-banner">

  <div class="cost-overlay"></div>

  <div class="cost-form-box">
    <h2>Estimate Treatment Cost</h2>
    <p>Get an approximate cost before your visit</p>

    <form class="cost-form">

      <select>
        <option>Select Treatment</option>
        <option>Heart Surgery</option>
        <option>Knee Replacement</option>
        <option>Dental Care</option>
      </select>

      <select>
        <option>Select Country</option>
        <option>India</option>
        <option>Dubai</option>
        <option>Turkey</option>
      </select>

      <input type="text" placeholder="Number of Days" />
      <input type="text" placeholder="Your Budget" />

      <button type="button">Check Cost →</button>

    </form>
  </div>

</section>
    
    </>
  )
}

export default CompoCost