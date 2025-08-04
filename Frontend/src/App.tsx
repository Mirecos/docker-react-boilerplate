import React from 'react';
import { isIdentified } from './api/localApi/user';



function App() {
  
  isIdentified().then(data => {
    console.log('User identified:', data);
  })

  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
