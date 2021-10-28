import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-success">
			<div className="container">
				<button
					className="navbar-toggler"
					data-bs-toggle="collapse"
					data-bs-target="#menu"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="menu">
					<ul className="navbar-nav navbar-right">
						<li className="nav-item">
							<Link to={"/drag-drop"} className="nav-link">
								DragNDrop
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/drag-drop1"} className="nav-link">
								DragNDrop1
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/rotation"} className="nav-link">
								Rotation
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
