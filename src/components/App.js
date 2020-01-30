import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogTile from './HogTile'
import hogs from '../porkers_data';

class App extends Component {
  
  constructor(){
    // console.log(hogs)
    super()
    let filteredByGreased = hogs.filter(hog=> hog.greased )
    this.state = {
      hogs,
      filteredHogs: filteredByGreased,
      greased: false
      // filterByGreased: false
    }
  }

  createHogTiles = () => {
    // let id = this.state.hogs.length + 1
    if (this.state.greased === false) {
      return this.state.hogs.map((hog, index) => <HogTile key={index} hog={hog} />)
    } else if (this.state.greased === true) {
      return this.state.filteredHogs.map((hog, index) => <HogTile key={index} hog={hog} />)
    }
  }

  filterGreased = () => {
    // let filteredByGreased = this.state.hogs.filter(hog=> hog.greased )
    // this.setState({
    //   filteredHogs: filteredByGreased
    // })
    this.setState({greased: !this.state.greased})
  }
  
  render() {
    return (
      <div className="App">
          < Nav filterGreased={this.filterGreased} />
          <div className = "ui grid container">
          {this.createHogTiles()}
          </div>
        
      </div>
    )
  }
}

export default App;
