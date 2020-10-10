/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';

const userNameStyle = {
  fontFamily: 'helvetica',
  color: 'lightgray',
  float: 'right',
  position: 'relative',
  marginLeft: '-20px',
  marginTop: '-21px',
  marginRight: '20px',
  fontSize: '18',
  textEmphasis: '-10',
};

const userCommentStyle = {
  float: 'left',
  position: 'relative',
  fontFamily: 'helvetica',
  marginLeft: '-10px',
  marginTop: '-15px',
  lineHeight: '2',
  paddingBottom: '20px',
};

const UserReview = (props) => (
  <div style={{ position: 'relative', paddingTop: '10px' }}>
    <div
      className="rating"
      style={{
        marginLeft: '-11.5px', marginTop: '20px', marginRight: '10px', position: 'relative', height: '55px', fontSize: '16', width: '320px', paddingRight: '10px',
      }}
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
        style={userNameStyle}
      > {props.review.username} - {props.review.created_at}
      </div>
    </div>
    <br />
    <div
      className="comment"
      style={userCommentStyle}
    > {props.review.comment}
    </div>
    <br />
  </div>
);

export default UserReview;
