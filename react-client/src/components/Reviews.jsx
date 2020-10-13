/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
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
        <div className={!props.show ? 'rating' : 'display-none'} id="review-rating">
          <div className={!props.show ? 'rating-upper' : 'display-none'} style={{ width: `${props.calcPercent(props.rating)}%` }}>
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
          className={!props.show ? 'inner-rating' : 'display-none'}
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
      { props.reviews.map((review, key) => <UserReview review={review} calcPercent={props.calcPercent} key={key} show={props.show} />)}
    </div>
    <br />
    <div className="moreReviews" type="button" onClick={props.showModal}>More Reviews</div>
  </div>
);

export default Reviews;
