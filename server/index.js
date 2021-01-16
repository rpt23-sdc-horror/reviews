const app = require('./routes');
require('newrelic');

// const port = process.env.PORT || 3003;
const port = 3003;



app.listen(port, () => {
  console.log(`listening on ${port}`);
});

