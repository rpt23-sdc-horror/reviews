const express = require('express');
const cors = require('cors');
const { findReview } = require('../database-mysql/index');
const port = process.env.PORT || 3003;

const app = express();

app.use(cors({
  origin: '*',
}));
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

app.get('/shop/:productId/:styleId', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.listen(port, function() {
  console.log(`listening on ${port}`);
});
