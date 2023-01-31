const server = require('./src/app.js');
const { conn } = require('./src/db.js');
-require('dotenv').config();

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at', process.env.PORT); 
  });
});
