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
    };
    this.calculatePercentage = this.calculatePercentage.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount() {
    // const url = window.location.pathname.split('/');
    // const productID = url[1];
    const productID = this.state.id;

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
          active: false,
        });
      },
      error: (err) => {
        throw ('err', err);
      },
    });
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

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
            this.toggleClass();
          }}
        >Reviews ({numberOfReviews})
          <div className="indexRating">
            <div className="rating">
              <div className="rating-upper" style={{ width: `${this.calculatePercentage(this.state.averageRating)}` }}>
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
          <div className={this.state.active ? 'arrow::before' : 'arrow::after'} id="arrow" />
        </button>
        <div className="content" id="content">
          <Reviews reviews={this.state.reviews} rating={this.state.averageRating} calcPercent={this.calculatePercentage} />
          <span />
        </div>
      </div>
    );
  }
}

export default ReviewsModule;

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
