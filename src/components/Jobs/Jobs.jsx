import React from 'react'
import './Jobs.css'
import {RiArrowDownSFill} from 'react-icons/ri'
import { useState } from 'react'
import JobCard from '../JobCard/JobCard'
import { useEffect } from 'react'
import {axiosReq} from '../../utils/apiCalls'
import {RiArrowLeftSLine} from 'react-icons/ri'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Jobs = () => {
    const [showType, setShowType] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [showLevel, setShowLevel] = useState(false)
    const [showLocation, setShowLocation] = useState(false)

    const [jobs, setJobs] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [JobPerPage, setJobPerPage] = useState(12);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const res = await axiosReq.get('jobs/')
                setJobs(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getJobs()
    }, [])

    const indexOfLastJob = currentPage * JobPerPage;
    const indexOfFirstJobs = indexOfLastJob - JobPerPage;
    const currentJobs = jobs?.slice(indexOfFirstJobs, indexOfLastJob);
    
    const handleChange = (page) => {
        setCurrentPage(page);
        
    }

  return (
    <div className='jobs'>
        <button className="category__for">JOBS</button>
        <h1>Best Content Writing Jobs</h1>
        <p>Hand-picked writing opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
        <div className="jobs__actions">
            <div className="jobs__actions-dropdown" onClick={() => {setShowType(prev => !prev); setShowCategory(false); setShowLevel(false); setShowLocation(false)}}>
                <span>Type</span>
                <RiArrowDownSFill />
                {showType && (
                    <div className="list">
                        <span className="listItem">Part-Time</span>
                        <span className="listItem">Full-Time</span>
                        <span className="listItem">Contract</span>
                        <span className="listItem">Freelance</span>
                        <span className="listItem">Internship</span>
                    </div>
                )}
            </div>
            <div className="jobs__actions-dropdown" onClick={() => {setShowCategory(prev => !prev); setShowType(false); setShowLevel(false); setShowLocation(false)}}>
                <span>Category</span>
                <RiArrowDownSFill />
                {showCategory && (
                    <div className="list">
                        <span className="listItem">Marketing</span>
                        <span className="listItem">Technical</span>
                        <span className="listItem">Copywriting</span>
                        <span className="listItem">Editorial</span>
                        <span className="listItem">UX</span>
                        <span className="listItem">Creative</span>
                        <span className="listItem">Medical</span>
                        <span className="listItem">SEO</span>
                        <span className="listItem">Education</span>
                        <span className="listItem">Other</span>
                        <span className="listItem">Finance</span>
                        <span className="listItem">Business</span>
                        <span className="listItem">News</span>
                        <span className="listItem">Entertainment</span>
                        <span className="listItem">Health</span>
                        <span className="listItem">Science</span>
                        <span className="listItem">Design</span>
                        <span className="listItem">Sports</span>
                    </div>
                )}
            </div>
            <div className="jobs__actions-dropdown"  onClick={() =>{ setShowLevel(prev => !prev); setShowCategory(false); setShowType(false); setShowLocation(false)}}>
                <span>Level</span>
                <RiArrowDownSFill />
                {showLevel && (
                    <div className="list">
                        <span className="listItem">Any</span>
                        <span className="listItem">Entry-Level</span>
                        <span className="listItem">Mid-Level</span>
                        <span className="listItem">Senior</span>
                    </div>
                )}
            </div>
            <div className="jobs__actions-dropdown" onClick={() => {setShowLocation(prev => !prev); setShowCategory(false); setShowLevel(false); setShowType(false)}}>
                <span>Location</span>
                <RiArrowDownSFill />
                {showLocation && (
                    <div className="list">
                        <span className="listItem">Local</span>
                        <span className="listItem">Remote</span>
                        <span className="listItem">Remote (Australia)</span>
                        <span className="listItem">Remote (Canada)</span>
                        <span className="listItem">Remote (Europe)</span>
                        <span className="listItem">Remote (India)</span>
                        <span className="listItem">Remote (Pacific)</span>
                        <span className="listItem">Remote (UK)</span>
                        <span className="listItem">Remote (US)</span>
                        <span className="listItem">Remote (US/Canada)</span>
                    </div>
                )}
            </div>
        </div>
        <div className="jobs__card-container">
            {currentJobs?.map(job => (
                <JobCard job={job} key={job.id} alt="" />
            ))}
        </div>
        <div className="jobs__card-actions">
             {currentPage > 1 && (
                <button onClick={() => handleChange(currentPage - 1)} className="jobs__card-actions_previous">
                    <RiArrowLeftSLine />
                    <span>Previous</span>
                </button>
            )}
            <button onClick={() => handleChange(currentPage + 1)} className="jobs__card-actions_next">
                <span>Next</span>
                <MdOutlineKeyboardArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Jobs