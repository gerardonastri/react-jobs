import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <button className="category__for">SUBSCRIBE</button>
        <h1>Let’s Get to Work</h1>
        <p>Hand-picked writing opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
        <input type="text" name="" id="" placeholder='Your Email Address' />
        <button className='subscribe__button'>Send Me Writing jobs</button>
        <span>Or 👉 <span className="color">get daily jobs newsletter</span> by becoming an early-bird member</span>
    </div>
  )
}

export default Subscribe