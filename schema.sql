DROP DATABASE IF EXISTS service_one;

CREATE DATABASE service_one;

USE service_one;

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
  product_id int NOT NULL,
  product_name varchar(250),
  comfort_average int,
  durability_average int,
  size_average int,
  stars_average int,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
