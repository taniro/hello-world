import React from "react";

class Contador extends React.Component {
	constructor() {
		super();
		this.state = {
			cont: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => {
			return {
				cont: prevState.cont + 1
			};
		});

		/*
		this.setState({
			cont: 1
        });
        */
	}

	render() {
		return (
			<div>
				<h1>Número de bananinhas é {this.state.cont}.</h1>
				<button onClick={this.handleClick}>Mais bananas!</button>
			</div>
		);
	}
}

export default Contador;
