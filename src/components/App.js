import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'

class App extends Component {

  state = {
    porkData: hogs
  }

  getGreasedFunction = () => {
    let greasedPigs = this.state.porkData.filter(hogObj => hogObj.greased)
    this.setState({
      porkData: greasedPigs
    })
  }

  getNameSortedFunction = () => {
    // let pigsSortedByName = this.state.porkData.sortBy(this.state.porkData, name)
    let hogsArr = [...this.state.porkData]
    // console.log(hogsArr)
    let sortedHogs = hogsArr.sort((hogObj1, hogObj2)=> ((hogObj1.name > hogObj2.name)? 1:-1))
    this.setState({
      porkData: sortedHogs
    })
  }

  getWeightSortedFunction = () => {
    // let pigsSortedByName = this.state.porkData.sortBy(this.state.porkData, name)
    let hogsArr = [...this.state.porkData]
    // console.log(hogsArr)
    let sortedHogs = hogsArr.sort((hogObj1, hogObj2)=> (hogObj1.weight-hogObj2.weight))
    this.setState({
      porkData: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer hogs={this.state.porkData} getGreased={this.getGreasedFunction} getNameSorted={this.getNameSortedFunction} getWeightSorted={this.getWeightSortedFunction}/>
      </div>
    )
  }
}

export default App;
