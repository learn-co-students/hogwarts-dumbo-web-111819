import React, { Component } from 'react'

export default class Hogtile extends Component {

    state = {
        details: false
    }

    onClick = (e) => {
        // console.log(e)
        this.setState({
            details: true
        })
    }

    renderHogInfo = () => {
        const {name, specialty, greased, weight} = this.props.hog

        return (
            <div>
                <p> I am: {name}</p>
                <p>Specialty: {specialty}</p>
                <p> Weight: {weight}</p>
                <p> Greased: {greased.toString()}</p>
                <button onClick = {this.onClickGoBack}> Go Back</button>
            </div>
        )
    }

    onClickGoBack = (e) => {
        this.setState({details:false})
    }

    pigNamePictureFormat = () => {
        let splitName = this.props.hog.name.split(' ')
        let joinedName = splitName.join('_')
        return joinedName.toLowerCase()
    }
    render() {
        // console.log(this.props)
        const {name, specialty, greased, weight} = this.props.hog
        return (
            <div className = 'ui eight wide column'>
                    <h3>{name}</h3>
                    {this.state.details ?  this.renderHogInfo():<img onClick = {this.onClick} src = {require(`../hog-imgs/${this.pigNamePictureFormat()}.jpg`)}></img>}
            </div>
        )
    }
}
