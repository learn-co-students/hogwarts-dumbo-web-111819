import React, {Component} from 'react'
import HogDetails from './HogDetails'
// import hogImage from '../hog-imgs/cherub.jpeg'

export default class HogTile extends Component {

   state={
      clicked: false,
   }

   handleClick = () => {
      // console.log(this.props.hog.specialty)
      // this.state.clicked = true
      this.setState({clicked: !this.state.clicked})
   }

   imageName = () => {
      let imageName = this.props.hog.name.toLowerCase()
      // return imageName
      return imageName.split(' ').join('_')
      // return imageName.join('_')
      // console.log(imageName)
   }

   render(){
      // console.log(this.imageName())
      // console.log(this.props.hog)
      const imageSource = require(`../hog-imgs/${this.imageName()}.jpg`)
      return(
        <div onClick={this.handleClick} >
            <img src={imageSource} alt={this.props.hog.name} />
            <h1>{this.props.hog.name}</h1>
            {this.state.clicked ? <HogDetails hog={this.props.hog} /> : null}
            {/* <HogDetails className={this.state.clicked ? "show" : "hidden"} hog={this.props.hog} /> */}
        </div> 
      )
   }
}

