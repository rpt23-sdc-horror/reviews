/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
import UserReview from './UserReview.jsx';
import '../style.css';

const innerRatingStyle = {
  float: 'right',
  fontFamily: 'helvetica',
  paddingLeft: '18px',
  paddingTop: '7.5px',
  fontWeight: '0',
  paddingRight: '0px',
};

const Reviews = (props) => (
  <div>
    <div>
      <div style={{ float: 'left' }}>
        <div className="rating" style={{ marginLeft: '-11.5px' }}>
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
          style={innerRatingStyle}
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
