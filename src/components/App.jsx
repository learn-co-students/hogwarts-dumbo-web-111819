import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tiles from './Tiles'
import Filter from './Filter';

class App extends Component {

  state = {
    hogsArray: hogs,
    greasedHogs: [],
    alphabetized: false,
    weighted: false
  }

  renderGreasedHogs = (e) => {
    // console.log(e)
    if(e){
      const greasedHogs = this.state.hogsArray.filter(hog => {
        // console.log(hog)
          if(hog.greased){
            return hog
          }
        })
        // console.log(greasedHogs)
        this.setState({greasedHogs})
    }
  }

  unfilterPiggies = (e) => {
    // console.log(e)
    this.setState({greasedHogs: []})
  }

  onChangeAlphabetize = () => {
    // console.log('hello')
    this.setState({alphabetized:true})
  }

  deAlphabetize = () => {
    // console.log('goodbye')
    this.setState({alphabetized:false})
  }

  onChangeWeighted = () => {
    // console.log('hello again')
    this.setState({weighted:true})
  }

  onChangeUnweighted = () => {
    // console.log('goodbye again')
    this.setState({weighted:false})
  }


  render() {
    // console.log(this.state.hogsArray)
    return (
      <div className="App">
          <Nav />
          <Filter 
            renderGreasedHogs={this.renderGreasedHogs}
            unfilterPiggies = {this.unfilterPiggies}
            onChangeAlphabetize ={ this.onChangeAlphabetize}
            deAlphabetize = {this.deAlphabetize}
            onChangeWeighted = {this.onChangeWeighted}
            onChangeUnweighted = {this.onChangeUnweighted}
          />
          <br></br>
          <br></br>
          {this.state.greasedHogs[0] ?  <Tiles hogs = {this.state.greasedHogs} alphabetized ={this.state.alphabetized} weighted = {this.state.weighted}/> :  <Tiles hogs = {this.state.hogsArray} alphabetized ={this.state.alphabetized} weighted = {this.state.weighted}/>}
      </div>
    )
  }
}

export default App;
