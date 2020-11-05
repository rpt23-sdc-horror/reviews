import React from 'react';
import { expect } from 'chai';
import ReviewsModule from '../../react-client/src/app.jsx';
import styles from '../../react-client/src/styles/Index.module.css';
import { before, after  } from 'mocha';

describe('App react component', function () {
  const root = global.document.createElement('div');
  const body = global.document.querySelector('body');
  let wrapper;

  root.setAttribute('id', 'app-root');
  body.appendChild(root);

  before(function () {
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

  after(function () {
    wrapper.unmount();
  });

  it('Should render index rating', function () {
    expect(wrapper.find(`.${styles.indexRating}`)).to.have.lengthOf(1);
  });

  it('Should render collapsible', function () {
    expect(wrapper.find(`.${styles.collapsible}`)).to.have.lengthOf(1);
  });

  it('Should render Reviews component', function () {
    expect(wrapper.find('.reviews-component')).to.have.lengthOf(1);
  });
});
