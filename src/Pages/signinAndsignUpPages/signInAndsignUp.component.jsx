import React from 'react';
import './signInAndsignUp.styles.scss';
import SignIN from '../../Component/sign-in/sign-in.component';
import SignUp from '../../Component/sign-up/sign-up.component';

const signInAndsignUp = () => (
    <div className='sign-in-and-sign-up'>
      <SignIN/>
      <SignUp/>
    </div>
);
export default signInAndsignUp;