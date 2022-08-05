import React from 'react'
import './JobCard.css'

const JobCard = () => {
  return (
    <div className='jobCard'>
      <div className="jobCard__info">
        <img src="https://assets-global.website-files.com/6027ab9296f259fcd4b6d69b/62eb8e91b2fdcfb73ed2a97c_Netography.jpeg" alt="" />
        <div className="jobCard__desc">
          <h3>Technical Writer</h3>
          <span>Netography</span>
          <p>Full-Time, Remote</p>
        </div>
      </div>
      <div className="jobCard__date">August 4, 2022</div>
    </div>
  )
}

export default JobCard