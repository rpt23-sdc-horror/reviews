import React from 'react';
import styles from '../styles/Modal.module.css';
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

const ModalComponent = (props) => (
  <div>
    <div className={styles.modal}>
      <div className={styles.thumbnail}>
        <div>{props.productName}</div>
      </div>
      <br />
    </div>
    <div className={styles.modalRating}>
      <div className={styles.rating}>
        <div className={styles.ratingUpper} style={{ width: `${props.calcPercent(props.averageRating)}%` }}>
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
    <h2 className={styles.reviewsCount}>{props.reviews.length} REVIEWS</h2>
    <div className={styles.sizeRoot} id="size">
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Size
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <Slider
          defaultValue={props.averageSize}
          step={1}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </ThemeProvider>
      <div className={styles.sizeSmall} id="run-small">Runs Small</div>
      <div className={styles.sizeBig} id="run-big">Runs Big</div>
    </div>
    <div className={styles.comfortRoot} id="comfort">
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Comfort
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <Slider
          defaultValue={props.averageComfort}
          step={1}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </ThemeProvider>
      <div className={styles.uncomfortable} id="uncomfortable">Uncomfortable</div>
      <div className={styles.comfortable} id="comfortable">Very Comfortable</div>
    </div>
    <div className={styles.durabilityRoot} id="durability">
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Durability
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <Slider
          defaultValue={props.averageDurability}
          step={1}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </ThemeProvider>
      <div className={styles.notDurable} id="not-durable">Not Durable</div>
      <div className={styles.durable} id="durable">Very Durable</div>
    </div>
    <br />
    <div className={styles.sort}>
      <select className={styles.sortBy} defaultValue="newest" id="select">
        <option value="helful">Sort By: Most Helpful</option>
        <option value="newest">Sort By: Newest</option>
        <option value="high">Sort By: Highest To Lowest</option>
        <option value="low">Sort By: Lowest To Highest</option>
      </select>
    </div>
  </div>
);

export default ModalComponent;
