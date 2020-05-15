import React from 'react';

import './dev-body.css';
import CompImage from './mon.svg';

export default class DevContent extends React.Component {
    render() {
        return (
            <div className='dev-body-container'>
                <div className='dev-image-container'>
                    <img className='dev-image' src={CompImage} alt='computer image'/>
                </div>
                <div className='dev-text-container'>
                    This site is under development and will be available shortly. Your patience is greatly appreciated.
                </div>
            </div>
        )
    }
}