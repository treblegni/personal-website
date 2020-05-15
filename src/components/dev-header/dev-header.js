import React from 'react';

import './dev-header.css';
import Logo from './logo-medium-white.svg';

//{/*<img src={process.env.PUBLIC_URL + 'assets/construction-page.svg'}/>*/}

export default class DevHeader extends React.Component {
    render() {
        return (
            <div className='dev-header-container'>
                <div className='dev-logo-container'>
                    <img className='dev-logo' src={Logo}/>
                </div>
                <div className='dev-title-container'><span>Under Developement</span></div>
            </div>
        )
    }
}