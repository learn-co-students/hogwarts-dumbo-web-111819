import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer';
import HogTile from './HogTile';

class App extends Component {

  state ={
    hogs 
  }
  
  render() {
    // console.log(hogs)

    return (
      <div className="App">
          < Nav />
      <HogsContainer
        hogs = {this.state.hogs}
      
      />
      </div>
    )
  }
}

export default App;
