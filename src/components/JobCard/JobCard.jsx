import React from 'react'
import './JobCard.css'
import Moment from 'react-moment';

const JobCard = ({job}) => {

  
  return (
    <a href={`/job/${job.id}`} className='jobCard'>
      <div className="jobCard__info">
        <img src={job.img} alt="" />
        <div className="jobCard__desc">
          <h3>{job.jobTitle}</h3>
          <span>{job.name}</span>
          <p>{job.jobType}, {job.location}</p>
        </div>
      </div>
      <div className="jobCard__date">
        <Moment format="DD MMMM YYYY">{job.created}</Moment>
      </div>
    </a>
  )
}

export default JobCard