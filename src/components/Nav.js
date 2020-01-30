import piggy from '../porco.png'
import React from 'react'



const Nav = (props) => {
	// console.log(props.filterGreased);
	
	const handleFilter = function(){
		// console.log("hello");
		props.filterGreased()
	}
	
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<button onClick={handleFilter}>greased</button>
		</div>
	)
}

export default Nav
