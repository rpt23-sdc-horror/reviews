DROP DATABASE IF EXISTS service_two;

CREATE DATABASE service_two;

USE service_two;

CREATE TABLE review (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  username varchar(250),
  comment varchar(1000),
  verified boolean,
  locale varchar(250),
  upvote int,
  downvote int,
  created_at varchar(25),
  size_rating int,
  durability_rating int,
  comfort_rating int,
  stars int,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  product_id varchar(25) NOT NULL,
  product_name varchar(250),
  comfort_average int,
  durability_average int,
  size_average int,
  stars_average int,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql -p
 *  to create the database and the tables.*/
/*
to load csv's
LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/product.csv' IGNORE
INTO TABLE products
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'

LOAD DATA LOCAL INFILE 'C:/Users/Frnkai/Test/SDC/service-reviews/CSV/review.csv' IGNORE
INTO TABLE review
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
*/