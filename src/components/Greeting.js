import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello world</h1>
      {!changedText && <Output>Its good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
