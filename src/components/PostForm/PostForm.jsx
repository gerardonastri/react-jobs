import React from 'react'
import { useState } from 'react'
import './PostForm.css'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {axiosReq} from '../../utils/apiCalls'
import storage from '../../utils/firebase';

const PostForm = () => {
  const [currentForm, setCurrentForm] = useState('company')
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [linkToJob, setLinkToJob] = useState('')
  const [jobType, setJobType] = useState('')
  const [jobCategory, setJobCategory] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [level, setLevel] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = async () => {
    if(!email || !name || !location || !jobTitle || !linkToJob || !jobType || !jobCategory || !jobDesc || !level || !img){
      setError('Compile all the fields required')
    } else {
      setError(null)
      try {
        const fileData = await storage.ref(`post/${img.name}`).put(img)
        const imgSrc = await fileData.ref.getDownloadURL()
        const res = await axiosReq.post('jobs/create/', {
          email,
          name,
          location,
          website,
          jobTitle,
          linkToJob,
          jobType,
          jobCategory,
          jobDesc,
          level,
          img: imgSrc
        })
        window.location.replace(`job/${res.data.id}`)
      } catch (error) {
        console.log(error);
      }
    }
  }


  if(currentForm === 'company') return (
    <div className='postForm'>
      <div className="postForm__status">
        <span className='postForm__status-type'>Company information</span>
        <div className="postForm__status-counter">1/3</div>
      </div>
      <h2 className="postForm__title">Tell us about your company</h2>
      <h3 className="postForm__subtitle">We won't sell or rent your personal information to any third parties</h3>
      <div className="postForm__form">
        <div className="formGroup">
          <label htmlFor="email">Please enter your email *</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="name">Company name *</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="location">Company location *</label>
          <input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="website">Company website *</label>
          <input type="text" name="website" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
      </div>
      <div className="postForm__next">
        <button onClick={() => setCurrentForm('job')}>Next Step</button>
      </div>
    </div>
  )
  if(currentForm === 'job') return (
    <div className='postForm'>
      <div className="postForm__status">
        <span className='postForm__status-type'>Job information</span>
        <div className="postForm__status-counter">2/3</div>
      </div>
      <h2 className="postForm__title">Gives us more information about the job</h2>
      <h3 className="postForm__subtitle">Please fill in the details below so that we can get in contact with you.</h3>
      <div className="postForm__form">
        <div className="formGroup">
          <label htmlFor="title">Job title *</label>
          <input type="text" name="title" id="title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="link">Link to job *</label>
          <input type="text" name="link" id="link" value={linkToJob} onChange={(e) => setLinkToJob(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="type">Job Type *</label>
          <input type="text" name="type" id="type" value={jobType} onChange={(e) => setJobType(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="category">Job Category *</label>
          <input type="text" name="category" id="category" value={jobCategory} onChange={(e) => setJobCategory(e.target.value)} />
        </div>
      </div>
      <div className="postForm__next actionss">
        <HiOutlineArrowLeft onClick={() => setCurrentForm('company')} />
        <button onClick={() => setCurrentForm('last')}>Next Step</button>
      </div>
    </div>
  )
  if(currentForm === 'last') return (
    <div className='postForm'>
      <div className="postForm__status">
        <span className='postForm__status-type'>last Details</span>
        <div className="postForm__status-counter">3/3</div>
      </div>
      <h2 className="postForm__title">One step away to find your perfect match</h2>
      <h3 className="postForm__subtitle">Please fill in the details below so that we can get in contact with you.</h3>
      <div className="postForm__form">
        <div className="formGroup">
          <label htmlFor="description">Job description *</label>
          <textarea name="description" id="description" cols="30" rows="10" value={jobDesc} onChange={(e) => setJobDesc(e.target.value)}></textarea>
        </div>
        <div className="formGroup">
          <label htmlFor="type">Job Level *</label>
          <select name="level" id="level" onChange={(e) => setLevel(e.target.value)}>
            <option selected disabled>Select one..</option>
            <option value="any">Any</option>
            <option value="entry">Entry-level</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="img">Company Logo *</label>
          <input type="file" name="img" id="img" onChange={(e) => setImg(e.target.files[0])} />
        </div>
      </div>
      <div className="postForm__next actionss">
        <HiOutlineArrowLeft onClick={() => setCurrentForm('job')} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="postForm__errors">
        {error && (
          <span>{error}</span>
        )}
      </div>
    </div>
  )
}

export default PostForm