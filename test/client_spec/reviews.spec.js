/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable prefer-arrow-callback */
import React from 'react';
import { expect } from 'chai';
import ReviewsModule from '../../react-client/src/app.jsx';
import Reviews from '../../react-client/src/components/Reviews.jsx';
import styles from '../../react-client/src/styles/Reviews.module.css';
import { mount } from 'enzyme';
import { beforeEach } from 'mocha';

describe('Reviews', function () {
  const root = global.document.createElement('div');
  const body = global.document.querySelector('body');
  let wrapper;

  root.setAttribute('id', 'modal-root');
  body.appendChild(root);

  beforeEach(function () {
    wrapper = mount(<ReviewsModule />);

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
  });

  afterEach(function () {
    wrapper.unmount();
  });

  it('Should render index rating', function () {
    expect(wrapper.find(`.${styles.indexRating}`)).to.have.lengthOf(1);
  });

  it('Should render collapsible', function () {
    expect(wrapper.find(`.${styles.collapsible}`)).to.have.lengthOf(1);
  });

  it('Should render Reviews component', function () {
    expect(wrapper.find('.reviewsComponent')).to.have.lengthOf(1);
  })
});
