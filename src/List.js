/**
 * Created by darwinmorales on 3/10/2016.
 */

import React, {Component} from 'react';
import Card from './Card';
class List extends Component {
    render() {
        var cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                         title={card.title}
                         description={card.description}
                         color={card.color}
                         tasks={card.tasks}/>
        });
        return (
            <div className="list">

                <h1>4 {this.props.title}</h1>
                cards start
                {cards}
                cards end
            </div>
        );
    }
}
export default List;