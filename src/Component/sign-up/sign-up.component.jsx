import React from 'react';
import './sign-up.styles.scss';
import {auth,createUserProfileDocument} from '../../Utils/Firebase.utils';
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if (password!== confirmPassword)
        {
            alert('password dont match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
          await  createUserProfileDocument(user,{displayName});
          this.setState({displayName:'',
          email:'',
          password:'',
          confirmPassword:''})
        }
        catch(error){
            console.error(error);
        }
    }
    handleChange=event=>{
        const {name,value}= event.target;
        this.setState({[name]:value});
    }

    render()
    {
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I dont have account!</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name' required/>

                    <FormInput type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='email' required/>
                    
                    <FormInput type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='password' required/>

                    <FormInput type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword' required/>

                    <CustomButton type='submit'>Sign UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;