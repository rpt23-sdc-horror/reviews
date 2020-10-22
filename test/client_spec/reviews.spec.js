/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable prefer-arrow-callback */
import React from 'react';
import { expect } from 'chai';
import ReviewsModule from '../../react-client/src/app';
import styles from '../../react-client/src/styles/Reviews.module.css';

describe('Reviews', function () {
  it('Should render the Reviews wrapper', function () {
    const wrapper = shallow(<ReviewsModule />);
    wrapper.setState({
      id: 1,
      reviews: [{}, {}],
      averageRating: 4,
      averageSize: 3,
      averageComfort: 3,
      averageDurability: 2,
      averageRatingPercent: 2.5,
      show: false,
    });
    expect(wrapper.find(`.${styles.indexRating}`)).to.have.lengthOf(1);
  });
});
