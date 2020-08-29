import React from 'react';
import './App.css';
import List from './composition/List';
import STORE from './store.js';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

class App extends React.Component {
  state = { store: STORE };
  deleteCard = (cardId) => {
    const newStore = this.state.store;
    newStore.lists = newStore.lists.map(l => ({
      ...l,
      cardIds: l.cardIds.filter(id => id !== cardId)
    }));
    newStore.allCards = omit(newStore.allCards, cardId);
    this.setState({store: newStore});
  }
  addRandomCard = listId => {
    const newCard = newRandomCard();
    const newStore = this.state.store;
    newStore.allCards[newCard.id] = newCard;
    newStore.lists.map((l) => {
      if (l.id === listId) {
        l.cardIds.push(newCard.id);
      }
    });
    this.setState({store: newStore});
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map(list => (
            <List 
              header={list.header} 
              content={list.cardIds.map(id => this.state.store.allCards[id])} 
              id={list.id}
              key={list.id}
              deleteCard={this.deleteCard}
              addRandomCard={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
  
}

export default App;
