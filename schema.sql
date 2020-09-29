DROP DATABASE IF EXISTS service_one;

CREATE DATABASE service_one;

USE service_one;

CREATE TABLE review (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(250),
  comment varchar(1000),
  verified boolean,
  locale varchar(250),
  upvote int,
  downvote int,
  created_at datetime,
  size_rating int,
  durability_rating int,
  comfort_rating int,
  stars int,
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  sku_id int NOT NULL,
  comfort_average int,
  durability_average int,
  stars_average int,
  reviews_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (reviews_id) REFERENCES review (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
