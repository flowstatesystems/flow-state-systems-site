export default function Home(){return (
<div>
<header style={{maxWidth:1200,margin:'0 auto',padding:'24px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
<img src='/logo.png' style={{height:60}}/>
<div style={{display:'flex',gap:16,alignItems:'center'}}><a href='/terms'>Terms</a><a href='/privacy'>Privacy</a><a href='#contact' style={{background:'#84CC16',color:'#fff',padding:'12px 18px',borderRadius:14,textDecoration:'none',fontWeight:'bold'}}>Book Call</a></div>
</header>

<section style={{maxWidth:1200,margin:'0 auto',padding:'70px 24px',display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:40,alignItems:'center'}}>
<div>
<div style={{color:'#14B8A6',fontWeight:'bold',letterSpacing:3,fontSize:14}}>AI AUTOMATION AGENCY</div>
<h1 style={{fontSize:68,lineHeight:1.02,margin:'16px 0'}}>Never miss another lead</h1>
<p style={{fontSize:22,color:'#475569',maxWidth:620}}>Flow State Systems builds premium AI-powered automation that captures, qualifies, and follows up with leads 24/7 so your business grows while you focus on delivery.</p>
<div style={{display:'flex',gap:14,flexWrap:'wrap',marginTop:28}}>
<a href='mailto:info@flowstatesystems.net' style={{background:'#84CC16',color:'#fff',padding:'16px 24px',borderRadius:16,textDecoration:'none',fontWeight:'bold'}}>Book Free Strategy Call</a>
<a href='#services' style={{border:'1px solid #cbd5e1',padding:'16px 24px',borderRadius:16,textDecoration:'none',color:'#0F172A',fontWeight:'bold'}}>See Services</a>
</div>
</div>
<div style={{background:'#fff',padding:32,borderRadius:28,boxShadow:'0 20px 50px rgba(15,23,42,0.08)'}}>
<div style={{display:'grid',gap:14}}>
<div style={{background:'#F1F5F9',padding:16,borderRadius:16}}>New lead captured from website or ads</div>
<div style={{background:'#F1F5F9',padding:16,borderRadius:16}}>AI responds instantly via SMS + email</div>
<div style={{background:'#F1F5F9',padding:16,borderRadius:16}}>Qualified lead books directly on your calendar</div>
</div></div></section>

<section style={{background:'#fff',borderTop:'1px solid #e2e8f0',borderBottom:'1px solid #e2e8f0'}}>
<div style={{maxWidth:1200,margin:'0 auto',padding:'18px 24px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,textAlign:'center',fontWeight:'bold',color:'#475569'}}>
<div>24/7 Follow-Up</div><div>More Appointments</div><div>Less Admin Work</div><div>Built To Scale</div>
</div></section>

<section id='services' style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px'}}>
<h2 style={{fontSize:44,textAlign:'center'}}>What We Build</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20,marginTop:30}}>
<div style={{background:'#fff',padding:28,borderRadius:24,boxShadow:'0 10px 30px rgba(15,23,42,0.06)'}}><h3>Instant Lead Response</h3><p style={{color:'#64748B'}}>Every inquiry gets immediate follow-up through automated workflows.</p></div>
<div style={{background:'#fff',padding:28,borderRadius:24,boxShadow:'0 10px 30px rgba(15,23,42,0.06)'}}><h3>More Booked Calls</h3><p style={{color:'#64748B'}}>Qualified prospects move directly into your calendar automatically.</p></div>
<div style={{background:'#fff',padding:28,borderRadius:24,boxShadow:'0 10px 30px rgba(15,23,42,0.06)'}}><h3>Scale Efficiently</h3><p style={{color:'#64748B'}}>Remove repetitive admin work and grow without adding headcount.</p></div>
</div></section>

<section id='contact' style={{maxWidth:1000,margin:'0 auto',padding:'0 24px 80px'}}>
<div style={{background:'#0F172A',color:'#fff',padding:50,borderRadius:28,textAlign:'center'}}>
<h2 style={{fontSize:48,margin:'0 0 12px'}}>Ready to scale smarter?</h2>
<p style={{color:'#cbd5e1',fontSize:18}}>Let Flow State Systems build the lead machine your business deserves.</p>
<a href='mailto:info@flowstatesystems.net' style={{display:'inline-block',marginTop:24,background:'#84CC16',color:'#fff',padding:'16px 26px',borderRadius:16,textDecoration:'none',fontWeight:'bold'}}>Get Started Today</a>
</div></section>

<footer style={{maxWidth:1200,margin:'0 auto',padding:'0 24px 40px',display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap',color:'#64748B'}}>
<div>© Flow State Systems</div><div style={{display:'flex',gap:16}}><a href='/terms'>Terms</a><a href='/privacy'>Privacy</a></div>
</footer>
</div>)}