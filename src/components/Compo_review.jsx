


export default function Review(){

      const reviews = [
    {
      name: "Kaif ",
      role: "Web Dev",
      text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    },
    {
      name: "King",
      role: "CTO of Lambda",
      text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    },
    {
      name: "Pahat",
      role: "CTO of Lambda",
      text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    },
    {
      name: "Boss",
      role: "CTO of Lambda",
      text: "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
    },
  ];

    return(
        <>


  <section className="rv-section">
        <div className="rv-container">
          {/* HEADER */}
          <div className="rv-header">
            <span className="rv-badge">Review</span>
            <h2>What Our Patients Said</h2>

            <div className="rv-users">
              <div className="rv-avatars">
                <span>👩</span>
                <span>👨</span>
                <span>👩‍🦱</span>
                <span>👨‍🦳</span>
                <span>👩‍⚕️</span>
              </div>
              <div className="rv-rating">
                ⭐⭐⭐⭐⭐ <span>Loved by 100+ patients</span>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="rv-grid">
            {reviews.map((item, index) => (
              <div className="rv-card" key={index}>
                {/* TOP */}
                <div className="rv-top">
                  <div className="rv-profile">👨🏻</div>
                  <div className="rv-title">"Just love it"</div>
                  <div className="rv-stars">⭐⭐⭐⭐⭐</div>
                </div>

                {/* TEXT */}
                <p className="rv-text">{item.text}</p>

                {/* FOOTER */}
                <div className="rv-footer">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        </>
    )
}