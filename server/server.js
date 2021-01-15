require('dotenv').config();
const client = require('./clientRoutes');

const port = process.env.PORT || 3000;
client.listen(port, () => {
  console.log('user is earning those turns at port ' + port);
});