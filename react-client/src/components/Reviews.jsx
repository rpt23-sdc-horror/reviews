/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
import ListItem from './ListItem.jsx';

const Reviews = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map((item) => <ListItem item={item} />)}
  </div>
);

export default Reviews;
