const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 9,
    min: 4
  },
  wordsPerSentence: {
    max: 9,
    min: 6
  }
});

module.exports = lorem;