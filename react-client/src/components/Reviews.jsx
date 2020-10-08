/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
// import ListItem from './ListItem.jsx';
import '../style.css';

const Reviews = (props) => (
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
      <div style={{
        float: 'right', fontFamily: 'helvetica', paddingLeft: '18px', paddingTop: '7.5px', fontWeight: '0', paddingRight: '0px',
      }}
      >
        {props.rating} Stars
      </div>
    </div>
    {/* { props.reviews.map((review) => <ListItem review={review} />)} */}
  </div>
);

export default Reviews;
