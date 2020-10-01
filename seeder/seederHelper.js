'use strict'

// Helper functions to generate fake data.

const lorem = require('./loremIpsum');

const randomName = function(names) {
  return names[Math.floor(Math.random() * names.length)];
};

const randomComment = function() {
  return lorem.generateSentences(3);
};

const randomBool = function() {
  let num = Math.random();

  return num >= .50 ? true : false;
};

const randomDate = function(dates) {
  return dates[Math.floor(Math.random() * dates.length)];
};

const randomSku = function() {
  const headers = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'OO', 'PP', 'QQ'];
  const indexes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const header = headers[Math.floor(Math.random() * headers.length)];
  const index = indexes[Math.floor(Math.random() * indexes.length)];
  const sku = header + index + index + index + index;

  return JSON.stringify(sku);
};

const randomRating = function() {
  return Math.floor(Math.random() * 6);
};

module.exports = {
  randomName,
  randomBool,
  randomDate,
  randomSku,
  randomRating,
  randomComment
};