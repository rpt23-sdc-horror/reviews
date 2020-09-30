const updateDb = require('../database-mysql/index').updateDb;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 9,
    min: 6
  }
});

const names = ['Bob', 'Charlie', 'Jack', 'Jill', 'DrNy', 'Chris', 'Sarah', 'Kim', 'Mary', 'xxAio', 'shaneGiant', 'F.O', 'M.A', 'W.W', 'L.L', 'Arkoo'];
const dates = ['08-20-2020', '01-10-2020', '02-12-2020', '03-22-2020', '09-24-2020', '07-02-2020', '10-29-2020']

const randomName = function(names) {
  return names[Math.floor(Math.random() * names.length)];
};

const randomBool = function() {
  let num = Math.random();

  return num >= .50 ? true : false;
};

const randomDate = function(dates) {
  return dates[Math.floor(Math.random() * dates.length)];
};

const seed = function(names, dates) {

  for (let i = 0; i <= 100; i++) {

    let name = randomName(names);
    let prodName = 'placeholder';
    let locale = 'US';
    let bool = randomBool();
    let size = Math.floor(Math.random() * 5);
    let durability = Math.floor(Math.random() * 5);
    let comfort = Math.floor(Math.random() * 5);
    let rating = Math.floor(Math.random() * 5)
    let sizeAvg = Math.floor(Math.random() * 5);
    let durAvg = Math.floor(Math.random() * 5);
    let comAvg = Math.floor(Math.random() * 5);
    let ratingAvg = Math.floor(Math.random() * 5);
    let upvote = Math.floor(Math.random() * 5);
    let downvote = Math.floor(Math.random() * 5);
    let prodID = i + 1;
    let randomProdId = Math.floor(Math.random() * 100)
    let comment = lorem.generateSentences(3);
    let date = randomDate(dates);


    const dataOne = {
      product_id: prodID,
      product_name: prodName,
      comfort_average: comAvg,
      durability_average: durAvg,
      size_average: sizeAvg,
      stars_average: ratingAvg
    }

    const dataTwo = {
      product_id: randomProdId,
      username: name,
      comment: comment,
      verified: bool,
      locale: locale,
      upvote: upvote,
      downvote: downvote,
      created_at: date,
      size_rating: size,
      durability_rating: durability,
      comfort_rating: comfort,
      stars: rating
    }

    updateDb(dataOne, dataTwo);
  }

}

seed(names, dates);