import React from "react";
import NoteList from "../components/Notelist";
export default class IndexPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Notes</h1>
				<NoteList notes={this.props.notes} />
			</div>
		);
	}
}

