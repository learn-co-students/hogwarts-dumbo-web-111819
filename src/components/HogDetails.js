import React, {Component} from 'react'

export default class HogDetails extends Component {

   render(){
      // console.log('somethings working')
      return(
         // null
         <div className={this.props.className}>
            <p>{this.props.hog.specialty}</p>
            <h3>{this.props.hog.greased ? "normal hog!": "weird not greased!"}</h3>
            <h3>{this.props.hog.weight}</h3>
            <h3>{this.props.hog["highest medal achieved"]}</h3>
         </div>
      )
   }

}

