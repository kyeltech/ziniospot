import React from 'react'
import NewConditional from './NewConditional'

class State extends React.Component{
constructor(){
super()
this.state = {
unreadMessage : false
}
}
componentDidMount() {
setTimeout(() => {
this.setState ({
unreadMessage :[]
})
} , 1500)
}
render() {
return(
<div>
<NewConditional unreadMessage =
{this.state.unreadMessage}/>    

</div>
)
}
} 
export default State