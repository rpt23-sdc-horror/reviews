import React from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import ModalComponent from './components/Modal.jsx';
import './style.css';
import styles from './styles/Index.module.css';

const port = process.env.PORT || 3003;

class ReviewsModule extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 5,
      productName: [],
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
    const url = window.location.pathname.split('/');
    let productID = url[2];

    if (!productID) {
      productID = 5;
    }

    Modal.setAppElement('body');

    $.ajax({
      url: `http://3.134.81.175:${port}/api/reviews/${productID}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          productName: data[0].product_name,
          reviews: data,
          averageRating: data[0].stars_average,
          averageSize: data[0].size_average,
          averageComfort: data[0].comfort_average,
          averageDurability: data[0].durability_average,
        });
      },
      error: (err) => {
        this.setState({
          productName: null,
          reviews: null,
          averageRating: 0,
          averageSize: 0,
          averageComfort: 0,
          averageDurability: 0,
        });

        throw (err);
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
          className={this.state.show ? 'mymodal' : "display-none"}
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div onClick={this.showModal} className="close-modal" id="close-modal">X</div>
          <ModalComponent
            reviews={this.state.reviews}
            averageSize={this.state.averageSize}
            averageComfort={this.state.averageComfort}
            averageDurability={this.state.averageDurability}
            productName={this.state.productName}
            show={this.state.show}
            calcPercent={this.calculatePercentage}
            averageRating={this.state.averageRating}
          />
        </Modal>
        <button
          className={styles.collapsible}
          onClick={this.collapsibleClick}
        >
          Reviews ({numberOfReviews})
          <div className={!this.state.show ? styles.indexRating : "display-none"}>
            <div className={!this.state.show ? styles.rating : "display-none"}>
              <div className={!this.state.show ? styles.ratingUpper : "display-none"} style={{ width: `${this.calculatePercentage(this.state.averageRating)}%` }}>
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
          <Reviews
            reviews={this.state.reviews}
            rating={this.state.averageRating}
            calcPercent={this.calculatePercentage}
            showModal={this.showModal}
            show={this.state.show}
            className="reviews-component"
          />
          <span />
        </div>
      </div>
    );
  }
};

export default ReviewsModule;
