import React from 'react';
import styles from '../../react-client/src/styles/Modal.module.css';
import { expect } from 'chai';
import ModalComponent from '../../react-client/src/components/Modal.jsx';

describe('Modal react component', function () {
  let wrapper;
  const root = global.document.createElement('div');
  const body = global.document.querySelector('body');
  const props = {
    reviews: [{}],
    averageSize: 1,
    averageComfort: 4,
    averageDurability: 3,
    productName: 'Tester',
    show: true,
    calcPercent: function () {
      return 2;
    },
    averageRating: 3,
};

  root.setAttribute('id', 'modal-root');
  body.appendChild(root);

  before(function () {
    wrapper = mount(<ModalComponent {...props}/>);
  });

  after(function () {
    wrapper.unmount();
  });

  it('Should render the thumbnail div', function () {
    expect(wrapper.find(`.${styles.thumbnail}`)).to.have.lengthOf(1);
  });

  it('Should render an overall rating', function () {
    expect(wrapper.find(`.${styles.modalRating}`)).to.have.lengthOf(1);
  });

  it('Should render a selector', function () {
    expect(wrapper.find(`.${styles.sort}`)).to.have.lengthOf(1);
  });

  it('Should have four selectable options in the selector', function () {
    const selector = wrapper.find('#select').props();
    console.log(selector);
    expect(selector.children.length).to.equal(4);
  });

  it('Should render size-rating', function () {
    expect(wrapper.find('#size')).to.have.lengthOf(1);
    expect(wrapper.find('#run-big')).to.have.lengthOf(1);
    expect(wrapper.find('#run-small')).to.have.lengthOf(1);
  });

  it('Should render comfort-rating', function () {
    expect(wrapper.find('#comfort')).to.have.lengthOf(1);
    expect(wrapper.find('#comfortable')).to.have.lengthOf(1);
    expect(wrapper.find('#uncomfortable')).to.have.lengthOf(1);
  });

  it('Should render durability-rating', function () {
    expect(wrapper.find('#durability')).to.have.lengthOf(1);
    expect(wrapper.find('#durable')).to.have.lengthOf(1);
    expect(wrapper.find('#not-durable')).to.have.lengthOf(1);
  });
});
