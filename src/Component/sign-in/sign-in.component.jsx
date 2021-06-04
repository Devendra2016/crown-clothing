import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../Utils/Firebase.utils';
class SignIN extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event =>
    {
        event.prevent.default();
        this.setState({email:'',password:''});
    }
    handleChange=event=>
    {
        const {name,value}=event.target;
        this.setState({[name]:value});
    }

    render()
    {
        return(
            <div className='signIn'>
                <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>

                <FormInput type='email' name='email' label='email' 
                 handleChange={this.handleChange} 
                value ={this.state.email} required/>

                <FormInput type='password' name='password'  label='password' 
                handleChange={this.handleChange} 
                value ={this.state.password} required/>
                
                <CustomButton type='submit'>
                    Sign In
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign In with Google
                </CustomButton>
                
                </form> 
            </div>
        );
    }
}
export default SignIN;