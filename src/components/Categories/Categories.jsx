import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="category">
            <button className="category__for">FOR WRITERS</button>
            <h2 className="category__title">Looking for a Job?</h2>
            <p className="category__desc">Speed matters, be the first one to apply! Get job alerts in your email inbox for new openings daily. The Daily Newsletter Membership is open for early access.</p>
            <button className="category__btn">Become a Member</button>
        </div>
        <div className="category">
            <button className="category__for">FOR COMPANIES</button>
            <h2 className="category__title">Hiring Writers?</h2>
            <p className="category__desc">Post a job on the <b>#1 content writing job board</b> to reach 450K+ monthly website visitors, 16,500+ newsletter readers, 178K+ writers on LinkedIn and 5.9K writers on Facebook!</p>
            <button className="category__btn">Post a Job - $300</button>
        </div>
    </div>
  )
}

export default Categories