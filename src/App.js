import React from 'react';
import './App.css';
import Child from './Child'
import {TransactionProvider} from './transContext';
function App() {
  return (
    <TransactionProvider>
      <div>
        <Child />
      </div>
    </TransactionProvider>
  );
}

export default App;
