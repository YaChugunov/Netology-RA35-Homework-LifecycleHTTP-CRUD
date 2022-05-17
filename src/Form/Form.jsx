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
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <div className="formName">
            <label htmlFor="inputName">Текст карточки</label>
            <input
              name="inputName"
              type="text"
              placeholder="Временная зона"
              value={form.inputName}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Добавить</button>
          </div>
        </div>
      </form>
    </>
  );
}
