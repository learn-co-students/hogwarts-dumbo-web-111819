import React, { Component } from 'react'
import Hogtile from './Hogtile'
import pig from '../cherub.png'

export class Tiles extends Component {

    renderAllPigs = () => {
        return this.props.hogs.map( hog => <Hogtile key={hog.id} hog = {hog} picture ={pig}/>)
    }  

    alphabetizeHogs = () => {
        let newHogsArray = [...this.props.hogs]
        let sortedHogs = newHogsArray.sort((pig1,pig2)=> pig1.name.localeCompare(pig2.name))
        return sortedHogs.map( hog => <Hogtile key={hog.id} hog = {hog} picture ={pig}/>)
    }


    sortByWeight = () => {
        // console.log(this.props.weighted)
        let newHogsArray = [...this.props.hogs]
        let sortedHogs = newHogsArray.sort((pig1,pig2)=> pig1.weight < pig2.weight ? 1:-1)
        return sortedHogs.map( hog => <Hogtile key={hog.id} hog = {hog} picture ={pig}/>)
        
    }

    renderFilters = () => {
        if(this.props.weighted){
            return this.sortByWeight()
        } else if (this.props.alphabetized){
            return this.alphabetizeHogs()
        }else {
            return this.renderAllPigs()
        }
    }

    render() {
        // console.log(this.props.weighted)
        return (
            <div className = 'ui grid container'>
                {this.renderFilters()}
            </div>
        )
    }
}

export default Tiles
