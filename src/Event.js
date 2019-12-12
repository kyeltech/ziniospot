import React from 'react'

class Event extends React.Component {
        constructor(){
        super()
        this.state = {
            isLoggedIn :false
        }
        this.handleClick = this.handleClick.bind(this)
    }

        handleClick(){
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
        }
        } )
    }
    render(){
        let buttonText = this.state.isLoggedIn ? "log out" : "log in"
        let displayButton = this.state.isLoggedIn ? "logged In" : "Logged Out"
        return(
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h2>{displayButton}</h2>
            </div>
        )
    }
}
export default Event