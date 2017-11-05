/* create quick an dirty node application to send a note to the database
  information will be sent from the command line
  e.g. node app.js subject, content
  Where content date and id are autopopulated, date will always be today, id populated by the database
   */


const Note = require("./lib/note.js");
const db = require("./lib/db.js");

var subject = process.argv[2];
var content = process.argv[3];

console.log("Testing, subject: " + subject + " content: " + content);

//so far so good, now to move this note to the database.
//db.connect();
var notedal = new db.NoteDAL('tcp://postgres@localhost:5432/notes');

//static query that passes nothing... Should be passing a note but forget it for now
notedal.insertNote(subject, content, () => {
  console.log("closing db connection");
  notedal.end();
});
//db.end();


//after you get that working, write version 2 of the app that runs a service.
