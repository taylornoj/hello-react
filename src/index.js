import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("");
    // your code here

  const reset = () => {
    setName("");
    // your code here
  };

  return (
    <main>
      <input 
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Type your name" />
      <Button text="reset" reset={reset}/>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
