import React, {useState, useEffect} from 'react'
import './Job.css'
import { useLocation } from 'react-router-dom';
import {axiosReq} from '../../utils/apiCalls'
import AuthForm from '../../components/AuthForm/AuthForm'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import JobInfo from '../../components/JobInfo/JobInfo'


const Job = () => {
    const [showForm, setShowForm] = useState(false)
    const id = useLocation().pathname.split('/')[2]
    const [job, setJob] = useState(null)

    useEffect(() => {
        const getJob = async () => {
            try {
                const res = await axiosReq.get(`jobs/${id}`)
                setJob(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getJob()
    }, [id])

  return (
    <>
    <div className='container'>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <JobInfo job={job && job} />
      <div className="job__desc-container">
        <div className="job__desc">
          <h1>Job Description</h1>
          <div className='job__desc-wrapper' dangerouslySetInnerHTML={{__html: job?.jobDesc}} />
          <div className="job__desc-apply">
            <button>Apply for this Writing Job</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    {showForm && <AuthForm />}
    {showForm && (
      <div className="closeForm" onClick={() => setShowForm(false)} />
    )}
    </>
  )
}

export default Job