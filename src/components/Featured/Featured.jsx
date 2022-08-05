import React from 'react'
import './Featured.css'
import featuredImg from '../../featured.png'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featured__content">
        <h1>Do you want to be a full-time content writer? Look no further.</h1>
        <p>Get free weekly writing jobs by signing up for the newsletter. Or have a head start and get daily jobs newsletter by 👉 <span className='color-green'>becoming a member</span></p>
        <input type="text" name="" id="" placeholder='Your Email Address' />
        <button>Send Me Writing jobs</button>
      </div>
      <div className="featured__img">
        <img src={featuredImg} alt="" />
      </div>
    </div>
  )
}

export default Featured