import { useState } from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [active, setActive] = useState(null);
  function handleSingleSelect(getId) {
    active === getId ? setActive(null) : setActive(getId);
  }
  console.log(active);

  return (
    <div>
      {data.map((QA) => (
        <div key={QA.id} className='w-[400px] flex flex-col gap-1'>
          <h2 onClick={() => handleSingleSelect(QA.id)}>{QA.question}</h2>
          {active === QA.id ? <p className='mb-[1rem]'>{QA.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default App;
