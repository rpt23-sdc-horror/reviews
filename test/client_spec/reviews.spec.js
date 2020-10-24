import React from 'react';
import { expect } from 'chai';
import Reviews from '../../react-client/src/components/Reviews.jsx';
import styles from '../../react-client/src/styles/Reviews.module.css';
import { beforeEach, afterEach } from 'mocha';

describe('Reviews react component', function () {
  let wrapper;
  const root = global.document.createElement('div');
  const body = global.document.querySelector('body');
  const state = {
    counter: 0,
  }
  const props = {
  reviews: [{}],
  rating: 4,
  calcPercent: function () {
    return 3;
  },
  showModal: function () {
    return state.counter++;
  },
  show: false,
};

  root.setAttribute('id', 'reviews-root');
  body.appendChild(root);

  beforeEach(function () {
    wrapper = mount(<Reviews {...props}/>);
  });

  afterEach(function () {
    wrapper.unmount();
  });

  it('Should render write-review button', function () {
    expect(wrapper.find(`.${styles.writeReview}`)).to.have.lengthOf(1);
  });

  it('Should have a clickable more-reviews button', function () {
    wrapper.find(`.${styles.moreReviews}`).simulate('click');
    expect(state.counter).to.equal(1);
    expect(wrapper.find(`.${styles.moreReviews}`)).to.have.lengthOf(1);
  });

  it('Should render user-reviews component', function () {
    expect(wrapper.find('.user-review')).to.have.lengthOf(1);
  });
});
