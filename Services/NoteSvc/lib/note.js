//Implementation of a note

var Note = function(subject, content, noteID, noteDate){
  this.subject = subject;
  this.content = content;
  this.noteID = noteID;
  this.noteDate = noteDate;
}

module.exports = Note;
