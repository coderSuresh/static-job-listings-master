import React from 'react'
import Header from './components/Header'
import logo from './images/account.svg'

function App() {
  return (
    < >
      <Header />
      {/* card */}
      <section className='flex items-center justify-between border-l-4 border-primary bg-white rounded-md md:max-w-5xl md:mx-auto mx-5 gap-x-4 mt-10 shadow-lg shadow-shadow-color p-5'>
        <div className='flex gap-x-4'>
          {/* logo */}
          <img src={logo} className='w-24 h-24 rounded-full' alt="company logo" />
          {/* card content */}
          <div>
            {/* top category and tags */}
            <div className='flex gap-x-4'>
              <p className='text-primary'>Photosnap</p>
              {/* tags */}
              <div className='flex gap-x-2'>
                <div className='rounded-xl bg-primary text-white px-3'>New!</div>
                <div className='rounded-xl bg-black text-white px-3'>Featured</div>
              </div>
            </div>
            {/* card title */}
            <h2 className='font-semibold mt-2 text-xl'>Senior Frontend Developer</h2>

            {/* card details */}
            <div className='flex items-center gap-x-4 mt-2'>
              <p className='text-grayish-cyan'>1d ago</p>
              <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
              <p className='text-grayish-cyan'>Full Time</p>
              <span className='h-1 w-1 bg-grayish-cyan rounded-full'></span>
              <p className='text-grayish-cyan'>USA only</p>
            </div>
          </div>
        </div>

        {/* technologies cards */}
        <div className='flex gap-x-4 mt-6 md:mt-0'>
          <div className='rounded-md bg-light-cyan text-primary font-bold px-3 py-1'>Frontend</div>
          <div className='rounded-md bg-light-cyan text-primary font-bold px-3 py-1'>Senior</div>
          <div className='rounded-md bg-light-cyan text-primary font-bold px-3 py-1'>HTML</div>
        </div>

      </section>
    </>
  )
}

export default App
