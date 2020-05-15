import React from 'react';

import './dev-footer.css'
import GitHub from './github.svg'
import LinkedIn from './linkedin.svg'

export default class DevFooter extends React.Component {
    render() {
        return (
            <div className='dev-footer-container'>
                <div className='dev-social-media-container'>
                    <a href='https://github.com/treblegni'>
                        <img className='dev-social-media' src={GitHub}/>
                    </a>
                </div>
                <div className='dev-social-media-container'>
                    <a href='https://www.linkedin.com/in/ingelbert-figueroa-b75299182/'>
                        <img className='dev-social-media' src={LinkedIn}/>
                    </a>
                </div>
            </div>
        )
    }
}