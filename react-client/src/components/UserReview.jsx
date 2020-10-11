/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';

const UserReview = (props) => (
  <div id="user-review">
    <div
      className="rating"
      id="user-rating"
    >
      <div className="rating-upper" style={{ width: `${props.calcPercent(props.stars)}` }}>
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
      <div
        className="username"
        id="username"
      > {props.review.username} - {props.review.created_at}
      </div>
    </div>
    <br />
    <div
      className="comment"
      id="comment"
    > {props.review.comment}
    </div>
    <br />
  </div>
);

export default UserReview;
