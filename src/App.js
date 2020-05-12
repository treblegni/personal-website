import React from 'react';
// import Header from './components/header/Header'
// import Content from './components/content/Content'
// import Footer from './components/footer/Footer'

import DevHeader from './components/dev-header/dev-header';
import DevContent from './components/dev-content/dev-content'

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/*<Header/>
				<Content>
				</Content>
				<Footer/>*/}
				<DevHeader/>
				<DevContent/>
    		</div>
		)
	}
}