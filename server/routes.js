const express = require('express');
const cors = require('cors');
const { findReview } = require('../database-mysql/index');

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.urlencoded());
app.use(express.json());

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

module.exports = app;
