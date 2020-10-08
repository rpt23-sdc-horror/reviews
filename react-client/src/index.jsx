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
      id: 4,
      reviews: [],
      averageRating: [],
      averageSize: [],
      averageComfort: [],
      averageDurability: [],
    };
    this.calculatePercentage = this.calculatePercentage.bind(this);
  }

  componentDidMount() {
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
        });
      },
      error: (err) => {
        throw ('err', err);
      },
    });
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
          style={{ width: '600px', fontFamily: 'helvetica' }}
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
          <div style={{ float: 'right' }}>
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
        </button>
        <div className="content" style={{ width: '564px' }}>
          <Reviews reviews={this.state.reviews} rating={this.state.averageRating} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
