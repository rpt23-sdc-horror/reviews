/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
import ListItem from './ListItem.jsx';
import '../style.css';

const Reviews = (props) => (
  <div>
    <div style={{ float: 'left' }}>
      <div className="rating">
        <div className="rating-upper" style={{ width: '73%' }}>
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
        float: 'right', fontFamily: 'helvetica', paddingLeft: '18px', paddingTop: '8px', fontWeight: '0',
      }}
      >
        4.7 Stars
      </div>
    </div>
    { props.reviews.map((review) => <ListItem review={review} />)}
  </div>
);

export default Reviews;
