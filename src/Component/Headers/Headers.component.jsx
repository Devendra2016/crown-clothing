import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './Headers.styles.scss';

const Headers =() =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='Logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>
                SHOP
            </Link>
            <Link className='option' to='shop'>
                CONTACT
            </Link>
        </div>

    </div>
);
export default Headers;
