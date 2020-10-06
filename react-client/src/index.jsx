/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import './style.css';

class ReviewsModule extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      averageRating: [],
      averageSize: [],
      averageComfort: [],
      averageDurability: [],
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: 'localhost:3003/reviews/:productID',
  //     success: (data) => {
  //       this.setState({
  //         items: data,
  //       });
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Item List</h1>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews-module'));
