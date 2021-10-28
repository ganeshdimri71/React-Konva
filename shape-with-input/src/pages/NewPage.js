import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class NewPage extends Component {
	state = {
		note: {
			title: "",
			body: "",
			createAt: undefined,
			updateAt: undefined,
		},
	};

	updateValue = (e) => {
		const { note } = this.state;
		this.setState({
			note: { ...note, [e.target.name]: e.target.value },
		} );
		console.log('The value of the state inside the updateValue is : ', note)
	};
    handleSave = async (e) => {
        e.preventDefault();

        const id = this.props.onSave( this.state.note )
        this.props.history.replace(`/notes/${id}`)
    }
	render() {
		const { note } = this.state;
		return (
			<div>
				<h1>New Form</h1>
				<form action="" onSubmit={this.handleSave}>
					<div>
						<label htmlFor="">Title</label>
						<input
							type="text"
							name="title"
							value={note.title}
							onChange={this.updateValue}
						/>
					</div>
					<div>
						<textarea
							name="body"
							value={note.body}
							onChange={this.updateValue}
						/>
					</div>

					<div>
						<button>Save</button>
						<Link to="/">Cancel</Link>
					</div>
				</form>
			</div>
		);
	}
}
