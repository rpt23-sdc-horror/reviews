// Helper functions to generate fake data.

const lorem = require('./loremIpsum');

const randomName = function (names) {
  return names[Math.floor(Math.random() * names.length)];
};

const randomComment = function () {
  return lorem.generateSentences(3);
};

const randomBool = function () {
  const num = Math.random();

  return num >= 0.50;
};

const randomDate = function (dates) {
  return dates[Math.floor(Math.random() * dates.length)];
};

const randomRating = function () {
  return Math.floor(Math.random() * 6);
};

module.exports = {
  randomName,
  randomBool,
  randomDate,
  randomRating,
  randomComment,
};
