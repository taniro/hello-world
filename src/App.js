import React from "react";
import Header from "./Header";
import Question from "./Question";
import Contador from "./Contador";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			aluno: "Joao"
		};
	}

	sayNome() {
		return "taniro";
	}
	render() {
		const palavra = "Taniro";
		return (
			<div>
				<h1>Hello {palavra}</h1>
				<h2>
					{this.state.aluno} participa da aula de {this.sayNome()}
				</h2>
				<Header info={palavra} />
				<Question />
				<Contador />
			</div>
		);
	}
}

export default App;
