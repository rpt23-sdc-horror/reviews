const app = require('./routes');

// const port = process.env.PORT || 3003;
const port = 3003;
require('newrelic');


app.listen(port, () => {
  console.log(`listening on ${port}`);
});

module.exports = app;
