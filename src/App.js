import './App.css';

import React, {useState} from 'react';

function App(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`submiting Name: ${name}`)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label>
       first name:
        <input 
        type="text"
        value ={name}
        onChange = {e => setName(e.target.value)}
        />
      </label>
      <input type = "submit" value = "submit" />
      </form>
    </div>
  );
}

export default App;
