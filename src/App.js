import React from 'react';
import './App.css';
import './store.js';
import List from './composition/List';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List header="List 1"></List>
      </div>
    </main>
  );
}

export default App;
