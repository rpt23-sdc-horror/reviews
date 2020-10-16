/* eslint-disable func-names */
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

const findAll = function (callback) {
  connection.query('SELECT * FROM products INNER JOIN review ON products.product_id = review.product_id', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const findReview = function (id, callback) {
  const queryStr = `SELECT * FROM products INNER JOIN review ON products.product_id = review.product_id AND products.product_id = ${id}`;

  connection.query(queryStr, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const insertProducts = function (data, callback) {
  const productsQuery = `INSERT INTO products(product_id, product_name, comfort_average, durability_average, size_average, stars_average) VALUES(${data.product_id}, '${data.product_name}', ${data.comfort_average}, ${data.durability_average}, ${data.size_average}, ${data.stars_average})`;

  connection.query(productsQuery, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const insertReviews = function (data, callback) {
  const reviewQuery = `INSERT INTO review(product_id, username, comment, verified, locale, upvote, downvote, created_at, size_rating, durability_rating, comfort_rating, stars) VALUES(${data.product_id}, '${data.username}', '${data.comment}', ${data.verified}, '${data.locale}', ${data.upvote}, ${data.downvote}, '${data.created_at}', ${data.size_rating}, ${data.durability_rating}, ${data.comfort_rating}, ${data.stars})`;

  connection.query(reviewQuery, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const clearDb = function (callback) {
  const clearReview = 'TRUNCATE TABLE review';
  const clearProducts = 'TRUNCATE TABLE products';

  connection.query(clearReview, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });

  connection.query(clearProducts, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  insertProducts,
  insertReviews,
  findAll,
  clearDb,
  findReview,
  connection,
};
