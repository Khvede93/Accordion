import { useState } from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [active, setActive] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(getId) {
    setActive(active === getId ? null : getId);
  }

  function handleEnableMultiSelection() {
    setActive(null);
    setEnableMultiSelection(!enableMultiSelection);
  }

  function handleMultiSelect(getId) {
    const copyMultiple = [...multiple];
    const findCurrent = copyMultiple.indexOf(getId);
    if (findCurrent === -1) {
      copyMultiple.push(getId);
    } else {
      copyMultiple.splice(findCurrent, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <div className='bg-[#20948b] h-screen flex justify-center'>
      <div className='w-full max-w-[25rem] mt-[2rem] flex flex-col'>
        <button
          className='p-3 bg-white mb-12 rounded-xl w-max self-end'
          onClick={handleEnableMultiSelection}
        >
          {enableMultiSelection
            ? 'Disable Multi Selection'
            : 'Enable Multi Selection'}
        </button>
        <section>
          {data && data.length ? (
            data.map((QA) => (
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
            ))
          ) : (
            <div>No data found !!!</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
