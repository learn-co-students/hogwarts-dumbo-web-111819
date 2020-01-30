import React from 'react'


export default class HogDetails extends React.Component{

    render(){
        console.log(this.props.hog.greased)
        return(
            <div>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>{this.props.hog.weight} lbs</p>
            <p>Greased: {this.props.hog.greased ? "True": "False"}</p>
            <p>{this.props.hog['highest medal achieved']}</p>
        </div>
        )
    }



}