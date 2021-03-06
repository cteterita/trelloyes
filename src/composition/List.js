import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.content.map(card =>
                        <Card 
                            title={card.title} 
                            content={card.content} 
                            key={card.id} 
                            id={card.id}
                            deleteCard={this.props.deleteCard}
                        />
                    )}
                    <button 
                        type="button" 
                        className="List-add-button" 
                        onClick={() => this.props.addRandomCard(this.props.id)}>
                        + Add Random Card
                    </button>
                </div>
            </section>
          );
    }
}

export default List;