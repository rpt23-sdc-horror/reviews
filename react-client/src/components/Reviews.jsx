/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
import UserReview from './UserReview.jsx';
import '../style.css';

const Reviews = (props) => (
  <div>
    <div>
      <div style={{ float: 'left' }}>
        <div className="rating" id="review-rating">
          <div className="rating-upper" style={{ width: `${props.calcPercent(props.rating)}` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="rating-lower">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <div
          className="inner-rating"
          id="review-inner-rating"
        >
          {props.rating} Stars
        </div>
      </div>
    </div>
    <br />
    <div className="writeReview">Write a Review</div>
    <br />
    <div>
      { props.reviews.map((review) => <UserReview review={review} calcPercent={props.calcPercent} />)}
    </div>
    <br />
    <div className="moreReviews">More Reviews</div>
  </div>
);

export default Reviews;
