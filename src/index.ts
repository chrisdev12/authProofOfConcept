import server from './server/startup'
import assert from 'assert';
require('dotenv').config()

assert.ok(process.env.PORT, "port isn't provided"); 

server.listen(process.env.PORT, () => {
  console.log(`The application is listening on port ${process.env.PORT}`);
});