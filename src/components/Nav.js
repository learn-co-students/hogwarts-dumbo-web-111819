// import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div>
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={'/porco.png'} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
			<button onClick={props.filterPigs}>Filter Pigs</button>
			<button onClick={props.sortByName}>Sort Hogs by Name</button>
			<button onClick={props.sortByWeight}>Sort Hogs by Weight</button>
		</div>
	)
}

export default Nav
