import React from 'react';
import { expect } from 'chai';
import ModalComponent from '../../react-client/src/components/Modal.jsx';
import styles from '../../react-client/src/styles/Modal.module.css';
import { beforeEach } from 'mocha';

describe('Reviews react component', function () {
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
      return;
    },
    averageRating: 3,
};

  root.setAttribute('id', 'modal-root');
  body.appendChild(root);

  beforeEach(function () {
    wrapper = mount(<ModalComponent {...props}/>);
  });

  it('Should render the thumbnail div', function () {
    expect(wrapper.find(`.${styles.thumbnail}`)).to.have.lengthOf(1);
  });

  it('Should render an overall rating', function () {
    expect(wrapper.find(`.${styles.modalRating}`)).to.have.lengthOf(1);
  });

  xit('Should render size-rating', function () {
    expect(wrapper.find(`${styles.sizeRoot}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.sizeBig}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.sizeSmall}`)).to.have.lengthOf(1);
  });

  xit('Should render comfort-rating', function () {
    expect(wrapper.find(`${styles.comfortRoot}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.comfortable}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.uncomfortable}`)).to.have.lengthOf(1);
  });

  xit('Should render durability-rating', function () {
    expect(wrapper.find(`${styles.durabilityRoot}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.durable}`)).to.have.lengthOf(1);
    expect(wrapper.find(`${styles.notDurable}`)).to.have.lengthOf(1);
  });
});
