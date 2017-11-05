//Database interaction with postgres
//where to specify connection details environment variables, config files, hard coded

// const { Client } = require('pg');
// const client = new Client();

const pg = require('pg');
//var connStr = "tcp://postgres@localhost:5432/notes";
//var client = new pg.Client(connStr);

var NoteDAL = function(connectionString) {
  this.connectionString = connectionString;
  var client = new pg.Client(connectionString);
   this.connect = function() {
    client.connect((err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    });

    this.insertNote = function(subject, text, callback) {
      var query = "INSERT INTO notesapp.note(subject, content)VALUES('" + subject + "', '" + text + "')";
      client.query(
        query, (err) => {
          if (err) {
            console.error('connection error', err.stack)
          } else {
            console.log('connected')
          }
          callback();
        }
      );
    }

    this.end = function() {
      client.end()
      .then(() => console.log('client has disconnected'))
      .catch(err => console.error('error during disconnection', err.stack));
      //await client.connect();
    }
  }
}



module.exports.NoteDAL = NoteDAL;




/*
function connect() {
  client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  });
}

function insertNote(subject, text, callback) {
  var query = "INSERT INTO notesapp.note(subject, content)VALUES('" + subject + "', '" + text + "')";
  client.query(
    query, (err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
      callback();
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
module.exports.insertNote = insertNote;
module.exports.end = end;
*/
