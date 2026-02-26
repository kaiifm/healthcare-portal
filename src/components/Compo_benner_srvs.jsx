import BennrImg  from "../assets/images/big-heart-2png.png"


export default function BennerSrvc(){
    return(
        <>
 <section className="srvs-benner">

<div>

  <div className="qf-card">

    <h2 className="qf-title">GET A FREE QUOTE</h2>
    <p className="qf-subtitle">WE COVER ALL MEDICAL NEEDS</p>

    <form className="qf-form">
      <input type="text" placeholder="Patient Name" />
      <input type="text" placeholder="Patient Phone" />
      <input type="text" placeholder="Asking Service" />
      <textarea placeholder="Fetching Issues..."></textarea>

      <button   className="qf-btn">
        Submit →
      </button>
    </form>

    <small className="qf-note">
      By submitting the form I agree to the Terms of Use and Privacy Policy.
    </small>

  </div>
</div>


 </section>
        </>
    )
}