//Database interaction with postgres
//where to specify connection details environment variables, config files, hard coded

// const { Client } = require('pg');
// const client = new Client();

const pg = require('pg');
var connStr = "tcp://postgres@localhost:5432/notes";
var client = new pg.Client(connStr);

function connect() {
  client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  });
}

function query() {
  client.query(
    'INSERT INTO notesapp.note(subject, content)VALUES("Test", "This is a test note") ', (err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    }
  );
}

function end() {
  client.end()
  .then(() => console.log('client has disconnected'))
  .catch(err => console.error('error during disconnection', err.stack));
  //await client.connect();
}

module.exports.connect = connect;
module.exports.query = query;
module.exports.end = end;
