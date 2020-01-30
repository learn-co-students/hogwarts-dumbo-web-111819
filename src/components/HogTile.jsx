import React, { Component } from 'react'

export class HogTile extends Component {
    
    state = { showing: false };

    showInfo = () => {
        let newShowing = !this.state.showing;
        this.setState({
            showing: newShowing
        })
    }


    render() {
        // console.log(this.props)
        let {name, specialty, greased, weight} = this.props.hog
        let image = name.toLowerCase();
        return (
            <div>
                <h1>{name}</h1>
                {/* <li><img src={require('../hog-imgs/image.jpeg')} /></li> */}
                <div style={{ display: (this.state.showing === true ? 'block' : 'none') }} >
                    <li className="hidden">{specialty}</li>
                    <li className="hidden">{weight }</li>
                </div>
                <button onClick={this.showInfo}>Toggle Info</button>

            </div>
        )
    }
}

export default HogTile
