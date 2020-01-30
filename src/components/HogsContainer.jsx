import React, { Component } from 'react'
import HogTile from './HogTile';


export class HogsContainer extends Component {


    state = {
        greased: false
    }
    
    showGreased = () => {
        let newGreased = !this.state.greased
        this.setState({
            greased: newGreased
        })
    }

    hogMapper = () => {
        if (this.state.greased === false){
        return this.props.hogs.map( hog => {
            // console.log(hog)
            return < HogTile 
            hog = {hog}
            />
        })
    }
    else {
        let greased = this.props.hogs.filter( hog => hog.greased === true)
        // let sortedGreased = greased.sort();
        return greased.map( hog => {
            // console.log(hog)
            return < HogTile 
            hog = {hog}
            />
        })
    }
    }

    render() {
            return (
                <div>
                <button onClick={this.showGreased}> Show Greased </button>
                {this.hogMapper()}
            </div>
            
        )
    }
}

export default HogsContainer
