import React, { Component } from 'react'

export default class Hogtile extends Component {

    state = {
        details: false,
        hidden: false
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

    pigNamePictureFormat = () => {
        let splitName = this.props.hog.name.split(' ')
        let joinedName = splitName.join('_')
        return joinedName.toLowerCase()
    }

    renderBasicPig = () => {
        return (
            <div>
                <button onClick = {() => this.onClickHide()}> Hide</button>
                <br></br>
                <img onClick = {this.onClick} src = {require(`../hog-imgs/${this.pigNamePictureFormat()}.jpg`)}></img>
            </div>
        )
    }

    onClickHide = () => {
        this.setState({hidden: true})
    }

    onClickUnhide = () => {
        this.setState({hidden: false})
    }

    renderHog = () => {
        if(this.state.hidden){
            return(
            <div>
                <button onClick = {this.onClickUnhide}>Unhide</button>
            </div>
            )
        } else {
            return (this.state.details ? this.renderHogInfo():this.renderBasicPig())
        }
    }

    onClickGoBack = (e) => {
        this.setState({details:false})
    }


    render() {
        // console.log(this.props)
        const {name, specialty, greased, weight} = this.props.hog
        return (
            <div className = 'ui eight wide column'>
                    <h3>{name}</h3>
                    {this.renderHog()}
            </div>
        )
    }
}
