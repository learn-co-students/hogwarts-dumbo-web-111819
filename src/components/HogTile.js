import React from 'react'
import HogDetails from './HogDetails'


export default class HogTile extends React.Component{

    state = {
        display: false
    }

    displayPig = () => {
        this.setState(prevState=> {
            return {
                display: !prevState.display
            }
        })
    }
    
    render() {
        let imageFileName = `${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`

        return(
            <div className="ui eight wide column" onClick={this.displayPig}>
                <h4>{this.props.hog.name}</h4>
                <img alt="" src={require("../hog-imgs/"+imageFileName)}/>
                {this.state.display ? <HogDetails hog={this.props.hog}/>: null}
            </div>
        )
    }


}