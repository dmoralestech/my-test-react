/**
 * Created by darwinmorales on 4/10/2016.
 */

import React, { Component } from 'react'; import {render} from 'react-dom';
class Search extends Component { render() {
    return ( <div>
            Search Term: <input type="search" value="React" /> </div>
    ) }
}
render(<Search />, document.body);
