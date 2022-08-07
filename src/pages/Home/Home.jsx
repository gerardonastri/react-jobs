import React, {useState} from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import AuthForm from '../../components/AuthForm/AuthForm'
import Categories from '../../components/Categories/Categories'
import Jobs from '../../components/Jobs/Jobs'
import Subscribe from '../../components/Subscribe/Subscribe'
import Reviews from '../../components/Reviews/Reviews'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <div className='container'>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Featured />
      <Categories />
      <Jobs />
      <Subscribe />
      <Reviews />
      <Footer />
    </div>
    {showForm && <AuthForm />}
    {showForm && (
      <div className="closeForm" onClick={() => setShowForm(false)} />
    )}
    </>
  )
}

export default Home