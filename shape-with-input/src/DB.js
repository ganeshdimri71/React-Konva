import PouchDB from 'pouchdb'

export default class DB {
    constructor ( name ) {
        this.db = new PouchDB( name );
    }

    async getAllNotes () {
        let allNotes = await this.db.allNotes( { include_docs: true } )
        let notes = {}

        allNotes.rows.forEach(n=> notes[n.id]=n.doc)
        return notes;
    }

    async createNote ( note ) {
        note.createAt = new Date();
        note.updateAt = new Date();

        const res = await this.db.post( { ...note } )
        return res;
    }
}
