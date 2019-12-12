import React from 'react'
import FormComponent from './FormComponent'

class FormContainer extends React.Component {
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
        const{name,value,type,checked} = event.target
        type === "checkbox"?
        this.setState({
            dietaryRestrictions:{
                [name]: checked
            }
        })
        :
        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div> <FormComponent
            handleChange={this.handleChange}
            data={this.state}
            /></div>
           
            )
         
    }
}
export default FormContainer