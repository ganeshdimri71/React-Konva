import React, { Component } from "react";
class Rotation extends Component {
	constructor() {
		super();
		this.state = {
			toggle: false,
			rotate: false,
		};
	}
	componentDidMount() {
		const imag = this.image;
		imag.addEventListener("animationend", this.rotatingDone);
	}

	// componentWillUnmount() {
	//     const elm = this.image;
	//     imag.removeEventListener("animationend", this.rotatingDone);
	//   }

	rotatingDone = () => {
		this.setState(function (state) {
			return {
				toggle: !state.toggle,
				rotate: false,
			};
		});
	};
	render() {
		const { rotate, toggle } = this.state;
		return (
			<img
				src={toggle ? "image1.jpg" : "image3.jpg"}
				width={window.innerWidth / 2}
				height={window.innerHeight / 2}
				ref={(imag) => {
					this.image = imag;
				}}
				onClick={() => this.setState({ rotate: true })}
				className={rotate ? "rotate" : ""}
			/>
		);
	}
}
export default Rotation;
