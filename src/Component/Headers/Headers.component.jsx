import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './Headers.styles.scss';
import {auth} from '../../Utils/Firebase.utils';
import {connect} from 'react-redux';

const Headers =({currentUSer}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='Logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>
                SHOP
            </Link>
            <Link className='option' to='Contact'>
                CONTACT
            </Link>
            {
                currentUSer
                ?
                <div className='option' onClick={()=>auth.signOut()}>SignOut</div>
                :
                <Link className='option' to='/signIn'>Sign IN</Link>
            }
        </div>

    </div>
);
const mapStateToProps = (state)=>({
    currentUSer:state.user.currentUSer
});

export default connect(mapStateToProps)(Headers);
