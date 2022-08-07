import React from 'react'
import { useState } from 'react'
import './PostForm.css'
import {HiOutlineArrowLeft} from 'react-icons/hi'

const PostForm = () => {
  const [currentForm, setCurrentForm] = useState('company')


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
          <input type="email" name="email" id="email" />
        </div>
        <div className="formGroup">
          <label htmlFor="name">Company name *</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="formGroup">
          <label htmlFor="location">Company location *</label>
          <input type="text" name="location" id="location" />
        </div>
        <div className="formGroup">
          <label htmlFor="website">Company website *</label>
          <input type="text" name="website" id="website" />
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
          <input type="text" name="title" id="title" />
        </div>
        <div className="formGroup">
          <label htmlFor="link">Link to job</label>
          <input type="text" name="link" id="link" />
        </div>
        <div className="formGroup">
          <label htmlFor="type">Job Type *</label>
          <input type="text" name="type" id="type" />
        </div>
        <div className="formGroup">
          <label htmlFor="category">Job Category *</label>
          <input type="text" name="category" id="category" />
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
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className="postForm__next actionss">
        <HiOutlineArrowLeft onClick={() => setCurrentForm('job')} />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default PostForm