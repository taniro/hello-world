import React from "react";

class Header extends React.Component {
	render() {
		//this.props.info = "Teste";
		return (
			<div>
				<h1>Header</h1>
				<h2> Esse é o parametro: {this.props.info}</h2>
			</div>
		);
	}
}

export default Header;
