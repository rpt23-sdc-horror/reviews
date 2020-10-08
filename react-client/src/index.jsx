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
      collapsed: true,
    };
  }

  componentDidMount() {
    const productID = this.state.id;

    $.ajax({
      url: `localhost:3003/reviews/:${productID}`,
      success: (data) => {
        this.setState({
          reviews: data,
        });
      },
      error: (err) => {
        throw ('err', err);
      },
    });
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
            this.collapsed();
          }}
        >Reviews ({numberOfReviews})
          <div style={{ float: 'right' }}>
            <div className="rating">
              <div className="rating-upper" style={{ width: '73%' }}>
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
          <Reviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
