export default function FlowStateLandingPage(){
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <header className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src='/logo.png' alt='Flow State Systems' className='h-12 w-auto rounded'/>
        </div>
        <nav className='hidden md:flex gap-8 text-sm text-slate-300'>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <p className='text-lime-400 font-semibold tracking-[0.25em] uppercase text-sm mb-4'>AI Automation for Growth</p>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>Never miss another lead</h1>
          <p className='mt-6 text-lg text-slate-300 max-w-xl'>Flow State Systems builds AI-powered automations that capture, qualify, and follow up with leads instantly—so your business grows while you focus on delivery.</p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='https://calendly.com/your-link' className='px-6 py-3 bg-lime-400 text-slate-950 rounded-2xl font-semibold shadow-lg inline-block'>Book a Free Strategy Call</a>
            <a href='#services' className='px-6 py-3 border border-slate-700 rounded-2xl font-semibold inline-block'>See How It Works</a>
          </div>
        </div>
        <div className='bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl'>
          <img src='/logo.png' alt='Logo' className='h-24 w-auto mx-auto mb-8'/>
          <div className='space-y-4'>
            <div className='p-4 bg-slate-800 rounded-2xl'>New lead captured from website form</div>
            <div className='p-4 bg-slate-800 rounded-2xl'>AI sends text + email in under 60 seconds</div>
            <div className='p-4 bg-slate-800 rounded-2xl'>Qualified prospect booked into calendar</div>
          </div>
        </div>
      </section>
    </div>
  )
}
