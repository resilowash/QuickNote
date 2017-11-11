//Implementation of a note

class Note {
  constructor(subject, content, noteDate) {
    this.subject = subject;
    this.content = content;
    this.noteDate = noteDate;  
  }
}

var Note = function(subject, content, noteID, noteDate){
  this.subject = subject;
  this.content = content;
  this.noteID = noteID;
  this.noteDate = noteDate;
}

module.exports = Note;
