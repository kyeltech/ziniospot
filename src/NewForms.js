import React from 'react'

class NewForms extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            LastName:"",
            Age:"0",
            gender:"",
            destination:"",
            dietaryRestrictions:{
                isRice:false,
                isEba:false,
                isFufu:false
            }
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <main>
                <form>
                    <input
                    name="firstName"
                value={this.state.firstName} 
                    onChange={this.handleChange}
                    placeholder="First Name" 
             />
            <br />

            <input
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="last Name" 
            />
            <br />
            <input
                name="age"     
                value={this.state.age}       
                onChange={this.handleChange}
                placeholder="Age"
            />
            <br />
            <label>
                <input
                type="radio"
                name="gender"
                value="male"
                checked = {this.state.gender === "male"}
                onChange={this.handleChange}
                />male           
                </label>
            <br />
            <label>
                <input 
                type="radio"
                name="gender"
                value="female"
                checked = {this.state.gender === "female"}
                onChange={this.handleChange}
                />female
            </label>
            <br />
            <select 
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
            >
                <option value="">--please choosed a destination--</option>
                <option value="lagos">lagos</option>
                <option value="abuja">abuja</option>
                <option value="kaduna">kaduna</option>
                <option value="edo">edo</option>
                <option value="imo">imo</option>
                <option value="ibadan">ibadan</option>
            </select>
            <br />
            <label>
                <input
                type="checkbox"
                name="isRice"
                onChange={this.handleChange} 
                />isRice?
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                name="isEba"
                onChange={this.handleChange} 
                />isEba?
            </label>
            <br />
            <label>
                <input
                type="checkbox"
                name="isFufu"
                onChange={this.handleChange} 
                />isFufu?
            </label>
            <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
        <p>Your name:{this.state.firstName}               {this.state.lastName}
        </p>
        <p>Your age:{this.state.age}</p>
        <p>Your gender:{this.state.gender}</p>
        <p>Your destination:{this.state.destination}</p>
        <p>
            Your Dietary restrictions:
            {}

        </p>
        </main>

        )
    }
}
export default NewForms