import React, {useState} from 'react'
import './PostJob.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AuthForm from '../../components/AuthForm/AuthForm'
import PostForm from '../../components/PostForm/PostForm'


const PostJob = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <div className='container'>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
        <div className="postJob">
          <h1>Post a Job for $300</h1>
          <h3>Publish your writing job post on the <b>#1 content writing job board</b> to reach 450K+ monthly website visitors, 178K+ LinkedIn followers, 5.9K+ Facebook followers and 16,500+ newsletter readers!</h3>
          <PostForm />
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

export default PostJob