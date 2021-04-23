// Code MovieReviews Here
import React from 'react'

const Review = ({
    display_title,
    headline,
    byline,
    link,
    summary_short,
    opening_date,
    mpaa_rating
}) => {
    return (
        <div key={headline} className='review'>
            <h1 className='display-title'> {display_title} </h1>
            <h2 className='rating'> {mpaa_rating} </h2>
            <h3><a className='review-link' href={link.url}> {headline} </a></h3>
            <span className='author'> {byline} </span>
            <span className='opening-date'> {opening_date} </span>
            <p className='summary-short'> {summary_short} </p>
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className='review-list'> {reviews.map(Review)}</div>
MovieReviews.defaultProps = {reviews: []}

export default MovieReviews