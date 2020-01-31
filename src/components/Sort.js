import React from 'react'

export default class Sort extends React.Component{


    render(){
        return (
            <div>
            <button onClick={this.props.sortByName}>Sort Hogs by Name</button>
			<button onClick={this.props.sortByWeight}>Sort Hogs by Weight</button>
            </div>
        )
    }

}