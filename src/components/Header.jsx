import React, { Component } from 'react';
import logo from '../svg/logo.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} />
                    <button className="signIn-btn">Sign In</button>
                </div>
                <div className="header-content">
                    <h1>Unlimited time-wasters, bullshit and more.</h1>
                    <h2>Waste your time anywhere. Cancel anytime.</h2>
                    <h4>Ready to destroy your life? Click this button</h4>
                    <button id="roll-joint">ROLL JOINT <Icon className="Icon" icon={ic_chevron_right} size={37}/></button>
                </div>
            </div>
         );
    }
    
}


 
export default Header;

