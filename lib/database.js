const pg = require('pg');
let pool = new pg.Pool() 
// WHOA! Inline `require`!
const client = new pg.Client(require('./database_config'));

exports.query = function(queryString, callback) {
  pool.connect(this.url, (err, client, done) => {
    if (err) {
      done();
      return callback(err);
    }


 
    client.query(queryString, (err, result) => {
      callback(err, result);
      done();
    });
    pool.end()
  });

};

