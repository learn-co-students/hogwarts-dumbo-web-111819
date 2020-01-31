import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

export default class FilterContainer extends React.Component{


    render(){
        return (
            <div>
                <Filter filterPigs={this.props.filterPigs}/>
                <Sort sortByName={this.props.sortByName} sortByWeight={this.props.sortByWeight}/>
            </div>
        )
    }

}

