import React from 'react';
import './App.css';
import List from './composition/List';

function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(list => (
          <List header={list.header} content={list.cardIds.map(id => props.store.allCards[id])} key={list.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
