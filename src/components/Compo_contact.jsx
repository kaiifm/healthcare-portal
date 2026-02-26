export default function ContantLayout(){
    return(
        <>


<section class="contact-sec">

  <div class="contact-container">


    <div class="contact-left">

      <h2>Get in <span>Touch</span></h2>

      <p>
        Enim tempor eget pharetra facilisis sed maecenas adipiscing.
        Eu leo molestie vel, ornare non id blandit netus.
      </p>

      <form class="contact-form">

        <input type="text" placeholder="Name *" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone number *" />

        <select>
          <option>Disease Type</option>
        </select>

        <button>SEND</button>

      </form>


      <div class="contact-info">

        <div class="info-box">
          <div class="icon-box">📞</div>
          <div>
            <p>PHONE</p>
            <span>+123-456789</span>
          </div>
        </div>

        <div class="info-box">
          <div class="icon-box">📠</div>
          <div>
            <p>FAX</p>
            <span>+123-456789</span>
          </div>
        </div>

        <div class="info-box">
          <div class="icon-box">📩</div>
          <div>
            <p>EMAIL</p>
            <span>info@example.com</span>
          </div>
        </div>

      </div>

    </div>


 
    <div class="contact-right">

      <div class="schedule-card">

        <h3>Schedule hours</h3>

        <div class="schedule-list">
          <div><span>Monday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Tuesday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Wednesday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Thursday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Friday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Saturday</span><span>09:00 AM - 07:00 PM</span></div>
          <div><span>Sunday</span><span>Closed</span></div>
        </div>

        <div class="emergency">
          <p>Emergency</p>
          <h4>+8801-123145664</h4>
        </div>

      </div>

    </div>

  </div>

</section>
        </>
    )
}