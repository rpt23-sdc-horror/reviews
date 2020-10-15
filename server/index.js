/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const { findReview } = require('../database-mysql/index');

const app = express();

app.use(express.static(`${__dirname}/../react-client/dist`));
app.use(cors({
  origin: '*',
}));

app.get('/api/reviews/:productID', (req, res) => {
  const query = req.params.productID;

  findReview(query, (err, result) => {
    if (err) {
      throw (err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3003, () => {
  console.log('listening on port 3003!');
});
