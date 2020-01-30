import React from 'react'
import HogTile from './HogTile'
import HogImages from '../hog-imgs/cherub.jpg'

export default class HogContainer extends React.Component {
    render() {
        console.log(HogImages)
        let arrayOfComponents = this.props.hogs.map(hogObj => <HogTile key={hogObj.id} hog={hogObj}/> )

        return(
        <div className="ui grid container">
            { arrayOfComponents}
        </div>
            
        )
                // <div className="ui grid container">
        //     this.props.hogs.map(hog => return (<HogTile hog={hog}/>))
        // </div>



    }
}