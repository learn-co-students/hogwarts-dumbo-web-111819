import React, { Component } from 'react'

export class Filter extends Component {

    onChangeGreased = (e) => {
        if(e.target.checked){
            this.props.renderGreasedHogs(e)
        }else {
            this.props.unfilterPiggies(e)
        }
    }

    onChangeNameSort = (e) => {
        if(e.target.checked){
            this.props.onChangeAlphabetize()
            this.props.onChangeUnweighted()
        }else{
            this.props.deAlphabetize()
        }
    }

    onChangeWeightSort = (e) => {
        // console.log('hello')
        if(e.target.checked){
            this.props.onChangeWeighted()
            this.props.deAlphabetize()
        }else{
            this.props.onChangeUnweighted()
        }
    }

    onChangeRevertFilters = (e) => {
        if(e.target.checked){
            this.props.onChangeUnweighted()
            this.props.deAlphabetize()
        }
    }

    render() {
        return (
            <div>
                <label> Greased? </label>
                <input type = 'checkbox' onChange = {this.onChangeGreased} /> <br></br>
                <label> Alphabetize? </label>
                <input type = 'radio' name = 'alphaweight'onChange = {this.onChangeNameSort} />
                <label> Sort By Weight?</label>
                <input type = 'radio'  name = 'alphaweight' onChange = {this.onChangeWeightSort} /> <br></br>
                <label> Cancel Alphabetize & Weight </label>
                <input type = 'radio' name = 'alphaweight'onChange = {this.onChangeRevertFilters} />
            </div>
        )
    }
}

export default Filter
