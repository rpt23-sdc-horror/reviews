import React from 'react';
import styles from '../styles/ModalReviews.module.css';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "black",
      height: 9,
      width: 9,
      marginTop: 0.00001,
      },
      track: {
        display: "none",
      },
      rail: {
        color: "lightgray",
        marginTop: 1.6,
        height: 4.5,
      }
    }
  }
});

const ModalReviews = (props) => (
  <div className={styles.userReview}>
    <div className={styles.colLeft}>
      <div className={styles.indvidualRating}>
          <div className={styles.rating}>
            <div className={styles.ratingUpper} style={{ width: `${props.calcPercent(props.review.stars)}%` }}>
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
        <div className={styles.sizeRoot} id="size">
          <Typography id="discrete-slider-small-steps" gutterBottom>
            <div id={styles.sizeFont}>Size</div>
          </Typography>
          <ThemeProvider theme={muiTheme}>
            <Slider
              defaultValue={props.review.size_rating}
              step={1}
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </ThemeProvider>
          <div className={styles.sizeSmall} id="run-small">Runs Small</div>
          <div className={styles.sizeBig} id="run-big">Runs Big</div>
        </div>
        <div className={styles.comfortRoot} id="size">
          <Typography id="discrete-slider-small-steps" gutterBottom>
            <div id={styles.comfortFont}>Comfort</div>
          </Typography>
          <ThemeProvider theme={muiTheme}>
            <Slider
              defaultValue={props.review.comfort_rating}
              step={1}
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </ThemeProvider>
          <div className={styles.uncomfortable} id="uncomfortable">Uncomfortable</div>
        <div className={styles.comfortable} id="comfortable">Very Comfortable</div>
        </div>
        <div className={styles.durabilityRoot} id="size">
          <Typography id="discrete-slider-small-steps" gutterBottom>
            <div id={styles.durabilityFont}>Durability</div>
          </Typography>
          <ThemeProvider theme={muiTheme}>
            <Slider
              defaultValue={props.review.durability_rating}
              step={1}
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </ThemeProvider>
          <div className={styles.notDurable} id="not-durable">Not Durable</div>
          <div className={styles.durable} id="durable">Very Durable</div>
        </div>
      <div className={styles.border}></div>
    </div>
    <div className={styles.colRight}>
      <div className={styles.verified}>{ props.review.verified ? "Verified" : "Not Verified" }</div>
      <div className={styles.comment}>{props.review.comment}</div>
      <div className={styles.user}>{props.review.created_at} - {props.review.username} - San Francisco, CA, US</div>
      <div className={props.review.verified ? styles.verifiedUser : "display-none"}>{ props.review.verified ? "Verified Purchaser" : "" }</div>
      <div className={styles.votes}>
        <div className={styles.width}>
          <i id={styles.arrow} className={styles.up}></i>
          <div className={styles.upvote}>{props.review.upvote}</div>
        </div>
        <div className={styles.widthTwo}>
          <i id={styles.arrow} className={styles.down}></i>
          <div className={styles.downvote}>{props.review.downvote}</div>
          <div className={styles.pole}></div>
          <div className={styles.flag}></div>
        </div>
      </div>
    </div>
  </div>
);

export default ModalReviews;
