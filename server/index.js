/* eslint-disable no-console */
const express = require('express');

const { findAll } = require('../database-mysql/index');
const { findReview } = require('../database-mysql/index');

const app = express();

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/reviews/:productID', (req, res) => {
  const query = req.param.productID;
  findReview(query, (err, result) => {
    if (err) {
      console.err(err);
    } else {
      res.send(result);
    }
  });
});

// This route is strictly for testing purposes.

app.get('/testingRoute/databaseTestRoute', (req, res) => {
  findAll((err, result) => {
    if (err) {
      console.err(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3003, () => {
  console.log('listening on port 3003!');
});
