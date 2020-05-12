import React from 'react';

import './dev-header.css';

//{/*<img src={process.env.PUBLIC_URL + 'assets/construction-page.svg'}/>*/}

export default class DevHeader extends React.Component {
    render() {
        return (
            <div className='dev-header-container'>
                <div className='dev-logo-container'/>
                <div className='dev-title'>Under <br/>Developement</div>
            </div>
        )
    }
}