/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.description }
  </div>
);

export default ListItem;
