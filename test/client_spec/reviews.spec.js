/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable prefer-arrow-callback */
import React from 'react';
import Reviews from '../../react-client/src/components/Reviews';
import styles from '../../react-client/src/styles/Reviews.module.css';

describe('Reviews', function () {
  it('Should render the Reviews wrapper', function () {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.hasClass(`.${styles.parentDiv}`)).to.equal(true);
  });
});
