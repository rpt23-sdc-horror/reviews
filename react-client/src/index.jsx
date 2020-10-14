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
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import './style.css';

class ReviewsModule extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 1,
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
  }

  componentDidMount() {
    // const url = window.location.pathname.split('/');
    // const productID = url[1];
    const productID = this.state.id;
    Modal.setAppElement('body');

    $.ajax({
      url: `/api/reviews/${productID}`,
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
        throw ('err', err);
      },
    });
  }

  showModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  // toggleClass() {
  //   const currentState = this.state.active;
  //   this.setState({ active: !currentState });
  // }

  calculatePercentage(rating) {
    const percentage = rating / 5;
    return percentage * 100;
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
          className="collapsible"
          onClick={() => {
            const coll = document.getElementsByClassName('collapsible');
            let i;

            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                  content.style.maxHeight = null;
                } else {
                  content.style.maxHeight = `${content.scrollHeight}px`;
                }
              });
            }
          }}
        >Reviews ({numberOfReviews})
          <div className={!this.state.show ? 'indexRating' : 'display-none'}>
            <div className={!this.state.show ? 'rating' : 'display-none'}>
              <div className={!this.state.show ? 'rating-upper' : 'display-none'} style={{ width: `${this.calculatePercentage(this.state.averageRating)}%` }}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="rating-lower">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <div className="arrow" id="arrow" />
        </button>
        <div className="content" id="content">
          <Reviews reviews={this.state.reviews} rating={this.state.averageRating} calcPercent={this.calculatePercentage} showModal={this.showModal} show={this.state.show} />
          <span />
        </div>
      </div>
    );
  }
}

export default ReviewsModule;

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
