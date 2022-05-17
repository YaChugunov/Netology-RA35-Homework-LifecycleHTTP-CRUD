import React, { useState } from 'react';
import moment from 'moment';

export default function Form(props) {
  const { form, onSubmit, onChange } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    (form.inputTimezone && form.inputTimezone) !== ''
      ? onSubmit()
      : alert('Заполните оба поля!');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="notes-new">
          <textarea
            value={form.content}
            onChange={handleChange}
            rows="5"
            cols="50"
          />
          <button className="btn-send">Добавить</button>
        </div>
      </form>
    </>
  );
}
