import React from  'react'

class NewConditional extends React.Component {
constructor(){
super()
this.state = {
unreadMessage: [
"call you mum",
"pick you course to study",
"dpnt forget to sleep on time always"
]
}
}
// &&
// false && true
render(){
return(
<div>
    {
    this.state.unreadMessage.length > 0 &&
     <h2>you have{this.state.unreadMessage.length} unread message!
     </h2>
}
</div>
)
}
}

export default NewConditional