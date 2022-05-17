import React from 'react';

export default function ItemList({ notes, handleDelete }) {
  return notes.map((note) => (
    <div className="note-container" key={note.id}>
      <button className="note-close" onClick={() => handleDelete(note.id)}>
        X
      </button>
      <div className="content">{note.content}</div>
    </div>
  ));
}
