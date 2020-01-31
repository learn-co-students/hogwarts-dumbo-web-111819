import React from 'react'
import HogsTile from './HogsTile'

class HogsContainer extends React.Component{

    handleGreaseClick = () => {
        this.props.getGreased()
    }

    handleNameClick = () => {
        this.props.getNameSorted()
    }

    handleWeightClick = () => {
        this.props.getWeightSorted()
    }

    render(){
        let hogsArray = this.props.hogs.map((hogObj) => (
            <HogsTile
                name= {hogObj.name}
                specialty= {hogObj.specialty}
                greased= {hogObj.greased}
                weight= {hogObj.weight}
                highest_medal_achieved= {hogObj["highest medal achieved"]}
            />
        ))
        return(
            <div>
                <button onClick={this.handleGreaseClick}>Show Greased</button>
                <button onClick={this.handleNameClick}>Sort by Name</button>
                <button onClick={this.handleWeightClick}>Sort by Weight</button>
                {hogsArray}
            </div>
        )
    }


}

export default HogsContainer;