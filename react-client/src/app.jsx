/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
/* eslint-disable object-curly-newline */
/* eslint-disable no-else-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */

import React from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import './style.css';
import styles from './styles/Index.module.css';

class ReviewsModule extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 5,
      reviews: [],
      averageRating: [],
      averageSize: [],
      averageComfort: [],
      averageDurability: [],
      averageRatingPercent: [],
      show: false,
    };
    this.calculatePercentage = this.calculatePercentage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.collapsibleClick = this.collapsibleClick.bind(this);
  }

  componentDidMount() {
    const productID = 5;
    // const url = window.location.pathname.split('/');
    // const productID = url[2];

    Modal.setAppElement('body');

    $.ajax({
      url: `http://localhost:3003/api/reviews/${productID}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          reviews: data,
          averageRating: data[0].stars_average,
          averageSize: data[0].size_average,
          averageComfort: data[0].comfort_average,
          averageDurability: data[0].durability_average,
        });
      },
      error: (err) => {
        this.setState({
          reviews: null,
          averageRating: 0,
          averageSize: 0,
          averageComfort: 0,
          averageDurability: 0,
        });

        throw ('err', err);
      },
    });
  }

  showModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  calculatePercentage(rating) {
    const percentage = rating / 5;
    return percentage * 100;
  }

  collapsibleClick() {
    const coll = document.getElementsByClassName(styles.collapsible);

    coll[0].classList.toggle(styles.active);
    const content = coll[0].nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  }

  render() {
    let numberOfReviews;

    if (this.state.reviews === 0 || this.state.reviews === undefined) {
      numberOfReviews = 0;
    } else {
      numberOfReviews = this.state.reviews.length;
    }

    return (
      <div>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.showModal}
          contentLabel="My dialog"
          className={this.state.show ? 'mymodal' : 'display-none'}
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div>My modal dialog.</div>
          <div onClick={this.showModal} className="close-modal" id="close-modal">X</div>
        </Modal>
        <button
          className={styles.collapsible}
          onClick={this.collapsibleClick}
        >Reviews ({numberOfReviews})
          <div className={!this.state.show ? styles.indexRating : 'display-none'}>
            <div className={!this.state.show ? styles.rating : 'display-none'}>
              <div className={!this.state.show ? styles.ratingUpper : 'display-none'} style={{ width: `${this.calculatePercentage(this.state.averageRating)}%` }}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className={styles.ratingLower}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <div className={styles.arrow} />
        </button>
        <div className={styles.content}>
          <Reviews reviews={this.state.reviews} rating={this.state.averageRating} calcPercent={this.calculatePercentage} showModal={this.showModal} show={this.state.show} />
          <span />
        </div>
      </div>
    );
  }
}

export default ReviewsModule;
