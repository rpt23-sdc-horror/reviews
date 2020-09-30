const mysql = require('mysql');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'martinsung00',
  database : 'service_one'
});

const selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, result) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const findReview = function(id, callback) {
  const queryStr = `SELECT * FROM products INNER JOIN review ON products.reviews_id = review.id AND products.product_id = ${id}`;

  connection.query(queryStr, function(err, result) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const updateDb = function(data, dataTwo) {
  const queryStr = `INSERT INTO products(product_id, product_name, comfort_average, durability_average, size_average, stars_average) VALUES(${data.product_id}, '${data.product_name}', ${data.comfort_average}, ${data.durability_average}, ${data.size_average}, ${data.stars_average})`;
  const queryStrTwo = `INSERT INTO review(product_id, username, comment, verified, locale, upvote, downvote, created_at, size_rating, durability_rating, comfort_rating, stars) VALUES(${dataTwo.product_id}, '${dataTwo.username}', '${dataTwo.comment}', ${dataTwo.verified}, '${dataTwo.locale}', ${dataTwo.upvote}, ${dataTwo.downvote}, '${dataTwo.created_at}', ${dataTwo.size_rating}, ${dataTwo.durability_rating}, ${dataTwo.comfort_rating}, ${dataTwo.stars})`;

  connection.query(queryStr, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(null, result);
    }
  });

  connection.query(queryStrTwo, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(null, result);
    }
  });
};

module.exports = {
  updateDb
};
