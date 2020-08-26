import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    return (
        <section className="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">
                <Card title="Card1" content="Card 1 Content"></Card>
            </div>
        </section>
      );
}

export default List;