import React, {Component} from 'react';
import './App.css';


// Parent Component
class App extends Component {

    render() {
        return (
            <ul>
                <ListItem quantity="1" type="wheat">Bread</ListItem>
                <ListItem quantity="6" type="poultry">Eggs</ListItem>
                <ListItem quantity="2" type="drink">Milk</ListItem>
                {this.props.cards[1].title}
                {this.props.cards[1].status}
                <Cards card={this.props.cards[1]} />
            </ul>
        );
    }
}

// Child Component
class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.quantity}× {this.props.children} type: {this.props.type}
            </li>
        );
    }
}

class Cards extends  Component {
    render() {
        return (
            <div>
                children: {this.props.children}
                <p> status: {this.props.card.title} </p>
            </div>
        );
    }
}
export default App;
