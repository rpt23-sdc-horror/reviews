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
      color: 'black',
      height: 9,
      width: 9,
      marginTop: 0.00001,
      },
      track: {
        display: 'none',
      },
      rail: {
        color: 'lightgray',
        marginTop: 1.5,
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
    <div className={styles.sizeRoot}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Size
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <Slider
          defaultValue={3}
          step={1}
          min={1}
          max={5}
          valueLabelDisplay="auto"
        />
      </ThemeProvider>
    </div>
  </div>
);

export default ModalComponent;
