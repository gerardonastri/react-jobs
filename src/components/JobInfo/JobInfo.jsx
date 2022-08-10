import React from 'react'
import './JobInfo.css'
import Moment from 'react-moment';


const JobInfo = ({job}) => {
  return (
    <div className='jobInfo'>
      <div className="jobInfo__wrapper">
        <a href="/" className="jobInfo__back">👈 Back to Jobs</a>
        <h1 className="jobInfo__title">{job?.jobTitle}</h1>
        <div className="jobInfo__company">
          <a href={job?.website}><img src={job?.img} alt="" /></a>
          <span className="jobInfo__company-type">{job?.jobType} at</span>
          <a href={job?.website} className="jobInfo__company-website">{job?.name}</a>
        </div>
        <div className="jobInfo__details">
          <span>Company Location: <b>{job?.location}</b></span>
          <span>Level: <b>{job?.level}</b></span>
          <span>Category: <b>{job?.jobCategory}</b></span>
          <span>Posted on: <b><Moment format="MMMM DD, YYYY">{job?.created}</Moment></b></span>
        </div>
        <div className="jobInfo__btn">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobInfo