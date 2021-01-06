const app = require('./routes');

// const port = process.env.PORT || 3003;
const port = 3003;
require('newrelic');
// const redis = require("redis");
// const client = redis.createClient({
//   host: 'localhost',
//   port: 3004
// });

// client.on('ready', () => {
//   console.log('Redis listening on port 3004');
// })
// client.on('error', () => {
//   console.log('Error in Redis');
// })


app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// module.exports = client;
