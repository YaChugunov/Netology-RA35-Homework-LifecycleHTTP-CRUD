import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemClass from '../ItemClass/ItemClass';
import nanoid from 'nanoid';

import sendIcon from '/public/send.png';

export default function Main() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ content: '' });

  const { nanoid } = require('nanoid');
  const ID = nanoid();

  var sendIcon = '/public/send.png';

  const handleSubmit = (e) => {
    // добавление
    e.preventDefault();
    const newNote = new ItemClass(ID, form.content);
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setForm({ content: '' });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, content: value }));
  };

  const loadActualNotes = () => {
    // обновление
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((response) => response.json())
      .then((arr) =>
        arr.map((el) => setNotes((prevNotes) => [...prevNotes, el]))
      );
  };

  const loadNotes = () => {
    // загрузка
    console.log(process.env.REACT_APP_API_URL);
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then((response) => response.json())
      .then((arr) =>
        arr.map((el) => setNotes((prevNotes) => [...prevNotes, el]))
      );
  };

  const handleDelete = (id) => {
    // удаление
    fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then((body) => {
        let urlId = body.url.split('/');
        return urlId[urlId.length - 1];
      })
      .catch((err) => console.log(`Err ${err}`))
      .then((id) =>
        setNotes((prevNotes) => prevNotes.filter((o) => o.id !== id))
      );
  };

  return (
    <div onLoad={loadNotes}>
      <span>
        <h1>Notes</h1>
        <button type="button" onClick={loadActualNotes} className="update">
          Обновить
        </button>
      </span>
      <form onSubmit={handleSubmit} className="form">
        <span>
          <textarea
            value={form.content}
            onChange={handleChange}
            rows="7"
            cols="50"
          />
          <button className="send">+</button>
        </span>
      </form>

      <div className="notes">
        <ItemList notes={notes} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
