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
import styles from '../styles/Reviews.module.css';

const Reviews = (props) => (
  <div className={styles.parentDiv}>
    <div>
      <div className={styles.reviewsParent}>
        <div className={!props.show ? styles.rating : 'display-none'} id={styles.reviewRating}>
          <div className={!props.show ? styles.ratingUpper : 'display-none'} style={{ width: `${props.calcPercent(props.rating)}%` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className={styles.ratingLower}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <div
          className={!props.show ? null : 'display-none'}
          id={styles.reviewInnerRating}
        >
          {props.rating} Stars
        </div>
      </div>
    </div>
    <br />
    <div className={styles.writeReview}>Write a Review</div>
    <br />
    <div className={styles.userWrapper}>
      { props.reviews.map((review, key) => <UserReview review={review} calcPercent={props.calcPercent} key={key} show={props.show} />)}
    </div>
    <br />
    <div className={styles.moreReviews} type="button" onClick={props.showModal}>More Reviews</div>
  </div>
);

export default Reviews;
