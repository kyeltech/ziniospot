import React from 'react'

class Forms extends React.Component{
constructor() {
super()
this.state = {
firstName:"",
lastName:"",
gender:"",
favColor:"blue"
}
this.handleChange = this.handleChange.bind(this)
}
handleChange(event){
const {name,value, type, checked} = event.target
type === "checkbox" ? this.setState({[name]: checked}) : this.setState({ [name]: value})
}   //to debug a bug in a codebase// 
// OnSubmit(event){
//     const {name,value, type, checked} = event.target
//     type === "checkbox" ? this.setState({[name]: checked}) : this.setState({ [name]: value})
//     }   //to debug a bug in a codebase// 
    

render(){
return(
<form onSubmit={this.handleSubmit}>
<input type="text"value={this.state.firstName} name="firstName" 
placeholder="first name"  required
onChange={this.handleChange}/> <br/>
<input type="text"value={this.state.lastName} name="lastName" 
placeholder="last name" required
onChange={this.handleChange}/>


<textarea 
value={"some default value"}
onChange={this.handleChange}
/> <br />
<label>
<input 
type="checkbox"
name="isFriendly"
checked={this.state.isFriendly}
onChange={this.handleChange}
/> is Friendly?
</label>
<br />
<label>
<input 
type="radio"
name="gender"
value="male"
checked={this.state.gender === "male"}
onChange={this.handleChange}
/> male
</label>
<br />
<label>
<input 
type="radio"
name="gender"
value="female"
favColor=""
checked={this.state.gender ==="female"}
onChange={this.handleChange}
/> female
</label>
<br />
<label> Favourite Color: </label>
<select
value={this.state.favColor}
onChange={this.handleChange}
name="favColor"
>

<option value="blue">blue</option>
<option value="green">green</option>
<option value="yellow">yellow</option>
<option value="brown">brown</option>
<option value="pink">pink</option>
</select>
<h1>{this.state.firstName}
{this.state.lastName}</h1>
<h2> you are a {this.state.gender}</h2>
<h2> my favourite is {this.state.favColor}</h2>
<button>submit</button>
</form>
)
}
}

export default Forms