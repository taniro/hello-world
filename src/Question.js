import React from "react";

class Question extends React.Component {
	trataClick() {
		console.log("Click 1");
	}
	render() {
		return (
			<div>
				<button onClick={this.trataClick}>Click 1</button>
				<button onClick={() => console.log("Click 2")}>Click 2</button>
				<button onMouseOver={() => console.log("passou")}>Click 3</button>
			</div>
		);
	}
}

export default Question;
