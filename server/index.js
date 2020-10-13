/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const { findReview } = require('../database-mysql/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../react-client/dist`));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  });
  next();
});

app.get('/api/reviews/:productID', (req, res) => {
  const query = req.params.productID;
  console.log(query);

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
