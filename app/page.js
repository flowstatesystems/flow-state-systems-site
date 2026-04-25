export default function Home(){
const cards=[
['Instant Lead Response','Reply to every inquiry in seconds with AI text, email, and call workflows.'],
['Smart Qualification','Filter serious buyers automatically and prioritize hot leads.'],
['Calendar Booking','Turn conversations into booked appointments without back-and-forth.']
];
return (
<div style={{minHeight:'100vh',background:'#020617',color:'white',fontFamily:'Arial,sans-serif'}}>
<header style={{maxWidth:1200,margin:'0 auto',padding:'24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<img src='/logo.png' style={{height:48}}/>
<a href='#contact' style={{background:'#a3e635',color:'#020617',padding:'12px 20px',borderRadius:16,textDecoration:'none',fontWeight:'bold'}}>Book Call</a>
</header>

<section style={{maxWidth:1200,margin:'0 auto',padding:'80px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
<div>
<p style={{color:'#a3e635',letterSpacing:4,fontWeight:'bold'}}>AI AUTOMATION AGENCY</p>
<h1 style={{fontSize:64,lineHeight:1.05,margin:'16px 0'}}>Never miss another lead</h1>
<p style={{fontSize:20,color:'#cbd5e1',maxWidth:600}}>We build automated sales systems that capture, follow up, qualify, and book leads 24/7—so you grow faster without hiring more staff.</p>
<div style={{marginTop:30,display:'flex',gap:16,flexWrap:'wrap'}}>
<a href='https://calendly.com/your-link' style={{background:'#a3e635',color:'#020617',padding:'16px 24px',borderRadius:16,textDecoration:'none',fontWeight:'bold'}}>Book Free Strategy Call</a>
<a href='#services' style={{border:'1px solid #334155',padding:'16px 24px',borderRadius:16,textDecoration:'none',color:'white'}}>See Services</a>
</div>
</div>
<div style={{background:'#0f172a',padding:32,borderRadius:24}}>
<img src='/logo.png' style={{height:80,display:'block',margin:'0 auto 24px'}}/>
<div style={{display:'grid',gap:12}}>
<div style={{background:'#1e293b',padding:16,borderRadius:16}}>New lead captured from Facebook Ads</div>
<div style={{background:'#1e293b',padding:16,borderRadius:16}}>AI replies in under 60 seconds</div>
<div style={{background:'#1e293b',padding:16,borderRadius:16}}>Qualified prospect booked on your calendar</div>
</div>
</div>
</section>

<section id='services' style={{maxWidth:1200,margin:'0 auto',padding:'40px 24px 80px'}}>
<h2 style={{fontSize:42,textAlign:'center'}}>Systems That Grow Revenue</h2>
<div style={{display:'grid',gridTemplateColumns':'repeat(3,1fr)',gap:20,marginTop:30}}>
{cards.map(([t,d])=><div key={t} style={{background:'#0f172a',padding:28,borderRadius:24}}><h3>{t}</h3><p style={{color:'#94a3b8'}}>{d}</p></div>)}
</div>
</section>

<section id='contact' style={{maxWidth:1000,margin:'0 auto',padding:'0 24px 80px'}}>
<div style={{background:'#111827',padding:50,borderRadius:28,textAlign:'center'}}>
<h2 style={{fontSize:48,margin:0}}>Ready to scale smarter?</h2>
<p style={{color:'#cbd5e1'}}>Let Flow State Systems build your lead machine.</p>
<a href='mailto:hello@flowstatesystems.com' style={{display:'inline-block',marginTop:20,background:'#a3e635',color:'#020617',padding:'16px 28px',borderRadius:16,textDecoration:'none',fontWeight:'bold'}}>Get Started Today</a>
</div>
</section>
</div>
)}