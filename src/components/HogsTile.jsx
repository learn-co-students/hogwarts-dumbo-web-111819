import React from 'react'

class HogsTile extends React.Component{

    state={
        display: false
    }

    greasedOrNah = () => {
        if (this.props.greased) {
            return "yay"
        } else {
            return "nay"
        }
    }

    handleClick = () => {
        let displayChange = !this.state.display

        this.setState({
            display: displayChange
        })
        // return this.state.display
    }

    render(){
        let {name, specialty, weight, highest_medal_achieved} = this.props
        let display = this.state.display
        const pigpic = name.toLowerCase().split(' ').join('_')
        // console.log(pigpic)
        return(
            <div>
                <div onClick={this.handleClick}>
                    <h1>{name}</h1>
                    <img src={require(`../hog-imgs/${pigpic}.jpg`)} alt={'pig-image'} />
                </div>
                {display? <div>
                    <ul>
                        <li>specialty: {specialty}</li>
                        <li>greased: {this.greasedOrNah()}</li>
                        <li>weight: {weight}</li>
                        <li>highest medal achieved: {highest_medal_achieved}</li>
                    </ul>
                </div>: null}
                <br/>
            </div>
        )
    }


}

export default HogsTile;