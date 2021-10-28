import React from 'react'
import {Link} from 'react-router-dom'


export default class NoteList extends React.Component {
    renderNotes () {
        const notes = Object.values( this.props.notes );
        console.log("The value of the notes in NoteList : ", notes);
        return notes.map( ( n ) => <div><h2><Link to={ `/notes/${ n._id }` }>{n.title }</Link></h2></div>)
    }
    render () {
        console.log('The value of the function is : ',this.renderNotes())
        return (
					<div>
						{this.renderNotes()}
					</div>
				);
    }
}