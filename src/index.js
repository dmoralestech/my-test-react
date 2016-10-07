import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';
// import Search from './Search';

{/*ReactDOM.render(<Search searchText="hello"/>, document.getElementById('root'));*/}
ReactDOM.render(<Sample header1="hello"
                        header1Color = "red"
                        header2="goodbye"
                        header2Color = "blue"
                        header3="see ya"
                        header3Color = "yellow"
                />, document.getElementById('root'));
