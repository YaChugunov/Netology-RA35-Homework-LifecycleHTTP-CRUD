import React from 'react';
import Close from './close.png';

export default function Notes({ notes, handleDelete }) {
  return notes.map((note) => (
    <div className="note-container" key={note.id}>
      <button className="note-close" onClick={() => handleDelete(note.id)}>
        <img src={Close} alt="close" className="imgClose" />
      </button>
      <div className="content">{note.content}</div>
    </div>
  ));
}
