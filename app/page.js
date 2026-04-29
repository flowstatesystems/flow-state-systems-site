export default function Home(){
  return(
    <>
      <header className="nav">
        <img src="/logo.png" className="logo-img"/>
        <a href="https://calendly.com/flowstatesystems-info/30min" className="btn">Book A Call</a>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="left">
            <h1>Never Miss Another Lead.</h1>
            <p>Automation that instantly responds to calls, texts, and website inquiries.</p>
          </div>

          <div className="flow-card">
            <p>Incoming Call</p>
            <p>↓</p>
            <p>AI Response</p>
          </div>
        </div>
      </section>
    </>
  )
}
