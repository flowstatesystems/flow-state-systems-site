export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="logo">Flow State Systems</div>
        <a href="https://calendly.com/flowstatesystems-info/30min" className="btn">
          Book A Call
        </a>
      </header>

      <section className="hero">
        <div className="hero-inner">

          <div className="left">
            <h1>Never Miss Another Lead.</h1>

            <p>
              Automation that instantly responds to calls, texts, and website inquiries so you capture more customers automatically.
            </p>

            <a href="https://calendly.com/flowstatesystems-info/30min" className="btn large">
              Book Free Strategy Call
            </a>
          </div>

          <div className="right">
            <div className="flow-card">

              <div className="node main">Incoming Call</div>
              <div className="line"></div>

              <div className="node main">AI Receptionist</div>
              <div className="line"></div>

              <div className="row">
                <div className="node">Text Back</div>
                <div className="node">Book Appointment</div>
                <div className="node">Follow Up</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card"><h3>24/7</h3><p>Always responding instantly</p></div>
          <div className="card"><h3>2–5x</h3><p>More conversions</p></div>
          <div className="card"><h3>100+</h3><p>Businesses helped</p></div>
          <div className="card"><h3>100%</h3><p>Automated systems</p></div>
        </div>
      </section>

      <section className="calendar">
        <h2>Book a Call</h2>

        <iframe
          src="https://calendly.com/flowstatesystems-info/30min"
          width="100%"
          height="700"
          style={{ border: "none" }}
        />
      </section>
    </>
  );
}
