import React, { Component } from "react";
import pouchdb from "pouchdb";
export default class App extends Component {

	componentDidMount () {
		var db = new pouchdb("mydb3");
			/* console.log(db); */
			/*  To create the database : */

			/* db.info().then((info) => {
		console.log("The data is created sucessfully...!");
	}); */

			//To insert the value in the database :
			var doc = {
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
	});

			// Inserting the Multiple Data :

		/* 	var doc1 = {
				_id: "201",
				name: "Sanjay Dimri",
				age: 28,
				email: "sanjaydimri71@gmail.com",
			};
			var doc2 = {
				_id: "202",
				name: "Pali Dimri",
				age: 29,
				email: "sanjaydimri71@gmail.com",
			};
			var doc3 = {
				_id: "203",
				name: "Urmila Dimri",
				age: 30,
				email: "sanjaydimri71@gmail.com",
			};

			var docAll = [doc1, doc2, doc3];

			db.bulkDocs(docAll, function (err, res) {
				if (err) {
					console.log(err);
				} else {
					console.log("The value is : ", docAll);
				}
			}); */
	}

	render() {
		return (
		<h1>JjJjjjjjjj</h1>

		);
	}
}
