/* eslint-disable func-names */
const { CssBaseline } = require('@material-ui/core');
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to mysql');
  }
})

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

const create = (review) => {
  const createOne = 'INSERT INTO review SET ?';

  connection.query(createOne, [review], (err, results) => {
    if (err) {
      console.log('ERROR when inserting new review in DB');
    } else {
      console.log(null, 'Inserted new review in DB');
    }
  })
};

const read = (id) => {
  const readOne = 'SELECT * FROM review WHERE product_id = ?';z

  connection.query(readOne, [id], (err, results) => {
    if (err) {
      console.log(`ERROR when reading ${id}'s review in DB`);
    } else {
      console.log(null, results);
    }
  })
}

const update = (id, data) => {
  const updateReview = 'UPDATE review SET username = ?, comment = ?, verified = ?, locale = ?, upvote = ?, downvote = ?, created_at = ?, size_rating = ?, durability_rating = ?, comfort_rating = ?, stars = ? WHERE product_id = ?';

  connection.query(updateReview, [data, id], (err, results) => {
    if (err) {
      console.log(`ERROR when updating review ${id} in DB`);
    } else {
      console.log(null, results);
    }
  });
};

const deleteOne = (id) => {
  const deleteOneReview = 'DELETE FROM review WHERE product_id = ?';

  connection.query(deleteOneReview, [id], (err, results) => {
    if (err) {
      console.log(`ERROR when deleting review ${id} in DB`);
    } else {
      console.log(null, 'Review has been deleted, yee haw partner');
    }
  })
};

const uploadProdCSV = () => {
  const prodQry1 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv2' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry2 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv3' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry3 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv4' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry4 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv5' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry5 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv6' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry6 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv7' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry7 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv8' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const prodQry8 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product/product.csv9' INTO TABLE products FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";

  connection.query(prodQry1, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry2, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry3, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry4, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry5, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry6, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry7, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(prodQry8, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
}

const uploadRevCSV = () => {
  const revQry1 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv1' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry2 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv2' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry3 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv3' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry4 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv4' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry5 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv5' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry6 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv6' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry7 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv7' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry8 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv8' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry9 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv9' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";
  const revQry10 = "LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review/review.csv10' INTO TABLE review FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';";

  connection.query(revQry1, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry2, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry3, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry4, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry5, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry6, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry7, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry8, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry9, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
  connection.query(revQry10, (err, results) => {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = {
  insertProducts,
  insertReviews,
  findAll,
  clearDb,
  findReview,
  connection,
  create,
  read,
  update,
  deleteOne,
  uploadProdCSV,
  uploadRevCSV
};
