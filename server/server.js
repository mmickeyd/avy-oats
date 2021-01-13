require('dotenv').config();
const client = require('./clientRoutes');

const port = process.env.PORT || 3000;
client.listen(port, () => {
  console.log('server is working at port ' + port);
});