/* import PuochDB from "pouchdb"; */
import pouchdb from "pouchdb";
/* var PouchDB = require( "PouchDB" ); */

var db = new pouchdb("mydb3");
export const PouchFunction = () => {
	console.log(db);
	/*  To create the database : */

	/* db.info().then((info) => {
		console.log("The data is created sucessfully...!");
	}); */

	//To insert the value in the database :
	/* var doc = {
		_id: "200",
		name: "Ganesh Dimri",
		age: 27,
		email: "ganeshdimri71@gmail.com",
	};

	db.put(doc, function (err, res) {
		if (err) {
			console.log(err);
		} else {
			console.log("The data inserted is : ", doc);
		}
	}); */

	// Inserting the Multiple Data :

	var doc1 = {
    _id: '201',
    name: 'Sanjay Dimri',
    age: 28,
    email:'sanjaydimri71@gmail.com'
}
var doc2 = {
    _id: '202',
    name: 'Pali Dimri',
    age: 29,
    email:'sanjaydimri71@gmail.com'
}
var doc3 = {
    _id: '203',
    name: 'Urmila Dimri',
    age: 30,
    email:'sanjaydimri71@gmail.com'
}

var docAll = [doc1, doc2, doc3]

db.bulkDocs( docAll, function ( err, res ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('The value is : ', docAll)
    }
});

};

// To get the values :

/* db.get( '200', function ( err, doc ) {
    if ( err ) {
        console.log('err')
    }
    else {
        console.log('The data is : ', doc)
    }
}) */

//To update the document we need the ref ID :
/*1-160ad66a255338f7eb649c1091a40025  */
/* var doc = {
    _id:'200',
    name: 'Ganu Bhai',
    email: 'ganeshdimri71@gmail.com',
    age:27,
    _rev : '1-160ad66a255338f7eb649c1091a40025'
}

db.put( doc );

db.get( '200', function ( err, doc ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('The data is : ', doc)
    }
}) */

// For reading the batch of document
/* db.allDocs( ( function ( err, doc ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('The value is : ', doc.rows)
    }
})) */

//To get the number of rows in the pouch db :

/* db.allDocs( { include_docs: true }, function ( err, doc ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('The value is : ', doc)
    }
}) */

// To delete the particular document :
/* 1-160ad66a255338f7eb649c1091a40025 */

/* var doc = {
	_id: "300",
	name: "Ramesh Dimri",
	age: 27,
	email: "rameshdimri71@gmail.com",
}; */

/* db.get('300', function (err, doc) {
		if (err) {
			console.log(err);
		} else {
			console.log("The data is : ", doc);
		}
 });
 */
/* db.remove("300", "1-d883a6cb7f9f020f09151ab4a8dff4e7", function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Document Deleted...!');
	}
}); */

/* db.allDocs( function ( err, doc ) {
    if ( err ) {
        console.log(err)
    } else {
        console.log(doc.rows)
    }
}) */

// To delete the multiple documents

/* docs = [
	{ _id: "200", _rev: "2-e6a6bec49a1cdf7a28455fb4a8982ea1" },
	{ _id: "201", _rev: "1-c6726f35b55eb2426dd3ae5578e7322d" },
];

db.bulkDocs( docs, function ( err, res ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('Document is Deleted...!')
    }
}) */

// Destroying the database...!
/* db.destroy( function ( err, res ) {
    if ( err ) {
        console.log(err)
    }
    else {
        console.log('Database is Deleted...!')
    }
}) */
