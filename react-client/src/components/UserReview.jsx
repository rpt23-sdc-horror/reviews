/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import '../style.css';

const UserReview = (props) => (
  <div style={{ position: 'relative' }}>
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
        style={{
          fontFamily: 'helvetica', color: 'lightgray', float: 'right', position: 'relative', marginLeft: '-20px', marginTop: '-21px', marginRight: '20px', fontSize: '18', textEmphasis: '-10',
        }}
      > {props.review.username} - {props.review.created_at}
      </div>
    </div>
  </div>
);

export default UserReview;

{ /* <div style={{
  marginTop: '40px', paddingTop: '20px', position: 'relative', height: '100px',
}}
>
  <div
    className="rating"
    style={{
      marginLeft: '-11.5px', marginTop: '50px', float: 'left', position: 'relative',
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
  </div>
  <div
    className="username"
    style={{
      float: 'right', position: 'relative', color: 'lightgray', fontFamily: 'helvetica',
    }}
  >{props.review.username} - {props.review.created_at}
  </div>
  <div />
  <div className="userComment" style={{ position: 'relative', marginTop: '30px', float: 'right' }}>
    { props.review.comment }
  </div>
</div> */ }
