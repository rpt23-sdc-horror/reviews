const express = require('express');
const cors = require('cors');
const { findReview } = require('../database-mysql/index');
const compression = require('compression');

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.urlencoded());
app.use(express.json());

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
};

app.use(compression({ filter: shouldCompress, threshold: 0}));

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/api/reviews/:productID', (req, res) => {
  const query = req.params.productID;
  findReview(query, (err, result) => {
    if (err) {
      res.status(500);
      throw (err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/shop/:productID/:styleID', (req, res) => {
  const query = req.params.productID;
  findReview(query, (err, result) => {
    if (err) {
      res.status(500);
      throw (err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = app;
