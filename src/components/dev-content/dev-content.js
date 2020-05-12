import React from 'react';

import './dev-content.css';

export default class DevContent extends React.Component {
    render() {
        return (
            <div className='dev-content-container'>
                <div className='dev-computer'/>
                <div className='dev-text'>This site is under development and will be available shortly. Your patience is greatly appreciated.</div>
            </div>
        )
    }
}