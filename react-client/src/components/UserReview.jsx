/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/UserReviews.module.css';

const UserReview = (props) => (
  <div className={styles.UserReview}>
    <div className={styles.rating} id={styles.userRating}>
      <div className={!props.show ? styles.ratingUpper : 'display-none'} style={{ width: `${props.calcPercent(props.review.stars)}%` }}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={!props.show ? styles.ratingLower : 'display-none'}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className={styles.username}>
        {props.review.username} - {props.review.created_at}
      </div>
    </div>
    <br />
    <div className={styles.comment}>
      {props.review.comment}
    </div>
    <br />
  </div>
);

export default UserReview;
