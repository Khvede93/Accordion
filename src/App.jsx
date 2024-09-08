import { useState } from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [active, setActive] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(true);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(getId) {
    setActive(active === getId ? null : getId);
  }

  function handleMultiSelect(getId) {
    console.log('test' + getId);
  }

  return (
    <div className='bg-[#20948b] h-screen flex justify-center'>
      <div className='w-full max-w-[25rem] mt-[2rem]'>
        {data.map((QA) => (
          <div key={QA.id} className=' flex flex-col mb-1'>
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelect(QA.id)
                  : () => handleSingleSelect(QA.id)
              }
              className='flex cursor-pointer bg-white p-3 justify-between text-md font-medium'
            >
              <h2>{QA.question}</h2>
              <span>{active === QA.id ? '-' : '+'}</span>
            </div>

            {active === QA.id ? (
              <p className='bg-[#1db1a6] border-t p-3 pb-10'>{QA.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
