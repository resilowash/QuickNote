--create database notes
create schema notesapp
  create table note(
    id serial not null primary key,
    subject varchar(250),
    content text
  );
  alter table notesapp.note
  ADD NoteDateTime Timestamp
  --Add other table and schemas later, tags, etc. Start simple.
