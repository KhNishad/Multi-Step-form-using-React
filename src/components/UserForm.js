import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FromPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import Confirm from './Confirm';

 class UserForm extends Component {
     state = {
         step: 1,
         firstName: '',
         lastName:'',
         email:'',
         occupation:'',
         city:'',
         bio:''
     }

    // next step from
    nextStep = () =>{
        const { step }  = this.state;
        this.setState({
            step : step + 1
        })
    }
       // prev step from
       prevStep = () =>{
        const { step }  = this.state;
        this.setState({
            step : step - 1
        })
    }

    // handle fileds chnage 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {

        const { step } = this.state;
        const { firstName, lastName, email , occupation, city, bio} = this.state;
        const value = { firstName, lastName, email , occupation, city, bio}
        switch(step){
            case 1:
            return(
                <FormUserDetails 
                 nextStep = {this.nextStep}
                 handleChange  = {this.handleChange}
                 values = {value}
                
                />
            )
            case 2 :
                return(
                <FromPersonalDetails 
                 nextStep = {this.nextStep}
                 prevStep = {this.prevStep}
                 handleChange  = {this.handleChange}
                 values = {value}
                
                />
                )
            case 3 :
                return(
                    <Confirm 
                     nextStep = {this.nextStep}
                     prevStep = {this.prevStep}
                     values = {value}
                    
                    />
                )
            case 4 :
                return (
                <Success
                values = {value}
                />
                )
        }
    }
}
export default UserForm;
