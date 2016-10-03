/**
 * Created by darwinmorales on 3/10/2016.
 */

import React, {Component} from 'react';
import List from './List';
class KanbanBoard extends Component {
    render() {
        return (
            <div className="app">
                1
                <List id='todo' title="To Do" cards={ this.props.cards.filter((card) => card.status === "todo")
                }/>
                2
                <List id='in-progress' title="In Progress"
                      cards={ this.props.cards.filter((card) => card.status === "in-progress")
                      }/>
                3
                <List id='done' title='Done' cards={ this.props.cards.filter((card) => card.status === "done")
                }/>

            </div> );
    }
}


export default KanbanBoard;
