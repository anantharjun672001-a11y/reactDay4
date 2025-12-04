import React, { useState } from 'react';
import CompA from './Components/CompA';

const App = () => {
  const [value,setValue]=useState(10)
  const handleSubmit=()=>{
       setValue(value+1)
      console.log(value);
      
  }

  return (
    <div>
      <h1>React</h1>
      <p>{value}</p>
      <button onClick={handleSubmit}>Add</button>
      <CompA/>
    </div>
    
  );
};

export default App;