import React from 'react';
// import Header from './components/header/Header'
// import Content from './components/content/Content'
// import Footer from './components/footer/Footer'

import ConstructionPage from './components/construction/ConstructionPage';

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/*<Header/>
				<Content>
				</Content>
				<Footer/>*/}
				<ConstructionPage></ConstructionPage>
    		</div>
		)
	}
}