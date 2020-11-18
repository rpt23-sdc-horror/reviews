## Reviews Service
-REVIEWS API:

-POST: /shop/admin/create/:productID (creates one review)

-GET: /shop/admin/read/:productID (reads one review specified by product ID)

-POST: /shop/admin/update/:productID (updates one review specified by product ID)

-GET: /shop/admin/delete/:productID (deletes one review specified by product ID)

## Description
The reviews service is one of the four services that are being rendered onto a proxy-server. Reviews allow the client to see the product's reviews and comments.

## Table of Contents


## Installation
- Run npm i to acquire the necessary modules
- Run mysql -u root < schema.sql -p and enter in the password for MySQL (Remove -p if no password is needed)
- Run npm seed to fill the database with mock data
- Run npm react-dev to compile a bundle.js

## Usage

## Contribution

## Credits

## Licensing
Standard MIT license
