import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#222').all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
