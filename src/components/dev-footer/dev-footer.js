import React from 'react';

import './dev-footer.css'
import GitHub from './github.svg'
import LinkedIn from './linkedin.svg'

export default class DevFooter extends React.Component {
    render() {
        return (
            <div className='dev-footer-container'>
                <div className='dev-social-media-container'>
                    <img className='dev-social-media' src={GitHub}/>
                </div>
                <div className='dev-social-media-container'>
                    <img className='dev-social-media' src={LinkedIn}/>
                </div>
            </div>
        )
    }
}