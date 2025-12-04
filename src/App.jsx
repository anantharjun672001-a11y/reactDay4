import React, { useState } from 'react';

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
    </div>
    
  );
};

export default App;