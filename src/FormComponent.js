import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                name="firstName"
            value={props.data.firstName} 
                onChange={props.handleChange}
                placeholder="First Name" 
         />
        <br />

        <input
            name="lastName"
            value={props.data.lastName}
            onChange={props.handleChange}
            placeholder="last Name" 
        />
        <br />
        <input
            name="age"     
            value={props.data.age}       
            onChange={props.handleChange}
            placeholder="Age"
        />
        <br />
        <label>
            <input
            type="radio"
            name="gender"
            value="male"
            checked = {props.data.gender === "male"}
            onChange={props.handleChange}
            />male           
            </label>
        <br />
        <label>
            <input 
            type="radio"
            name="gender"
            value="female"
            checked = {props.data.gender === "female"}
            onChange={props.handleChange}
            />female
        </label>
        <br />
        <select 
        value={props.data.destination}
        name="destination"
        onChange={props.handleChange}
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
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isRice} 
            />isRice?
        </label>
        <br />
        <label>
            <input
            type="checkbox"
            name="isEba"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.isEba}  
            />isEba?
        </label>
        <br />
        <label>
            <input
            type="checkbox"
            name="isFufu"
            onChange={props.handleChange} 
            checked={props.data.dietaryRestrictions.isFufu} 
            />isFufu?
        </label>
        <br />
        <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
    <p>Your name:{props.data.firstName}
                {props.data.lastName}
    </p>
    <p>Your age:{props.data.age}</p>
    <p>Your gender:{props.data.gender}</p>
    <p>Your destination:{props.data.destination}</p>
    <p>
        Your Dietary restrictions:
    </p>
    <p> Rice: {props.data.dietaryRestrictions.isRice ? "Yes" : "No"}</p>
    <p> Eba:  {props.data.dietaryRestrictions.isEba  ? "Yes" : "No"}</p>
    <p> Fufu: {props.data.dietaryRestrictions.isFufu ? "Yes" : "No"}</p>
    </main>

    )
}
export default FormComponent
