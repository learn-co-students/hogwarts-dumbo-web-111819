import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'


class App extends Component {

  state = {
    hogsData: hogs,
    greasedHogs: [],
    sortedByName: [],
    filter: false,
  }

  filterPigs = () => {
    if(this.state.filter){
      this.setState({
        filter: false
      })
    } else {    
      let filteredPigs = this.state.hogsData.filter(hogObj=> hogObj.greased === true)
      this.setState({
        greasedHogs: filteredPigs,
        filter: true
      })
    }
  }

  sortByName = () => {   
    let sortedPigs = this.state.hogsData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogsData: sortedPigs,
    })
  }

  sortByWeight = () => {
    let sortedPigs = this.state.hogsData.sort((a, b) => (a.weight - b.weight))
    this.setState({
      hogsData: sortedPigs
    })
  }


  render() {
    return (
      <div className="App">
          < Nav filterPigs={this.filterPigs} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
          < HogContainer hogs={this.state.filter ? this.state.greasedHogs : this.state.hogsData}/>
      </div>
    )
  }
}

export default App;
