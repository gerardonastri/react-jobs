import React from 'react'
import './Reviews.css'

const Reviews = () => {
  const reviews = [1,2,3,4,5,6]

  return (
    <div className='reviews'>
      <h1>Writer Reviews</h1>
      <div className="reviews__cardContainer">
        {reviews.map(review => (
          <div className="reviews__card">
            <span className='quote'>“</span>
            <p className="reviews__card-desc">In my capacity as a freelance writer and indie author I have no hesitation in recommending Content Writing Jobs to fellow writers seeking work. The well-patronized, user-friendly site has opened up a wealth of writing opportunities around the world for me, and as a Kiwi based Down Under that’s something I certainly appreciate. I also appreciate the number of potentially suitable jobs that show up like clockwork each week, and also the excellent customer service I’ve experienced. Highly recommended!</p>
            <span className="reviews__card-user">Lance Morcan from New Zealand</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews