import React from 'react'

class Hello extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        } 
    }
    render() {
        return (
            <div>
                <h1>state can be used to maintain class component? {this.state.answer}</h1>
                <childComponent answer ={this.state.answer}/>
                
             </div>
        )
    }
}
export default Hello