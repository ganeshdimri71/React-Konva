import React from 'react'
import {Link} from 'react-router-dom'

export default function ( props ) {
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
								<Link to={"/rectangle"} className="nav-link">
									Rectangle
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/circle"} className="nav-link">
									Circle
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/polygon"} className="nav-link">
									RegularPoly
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/regshape"} className="nav-link">
									RegShape
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/eventhandling"} className="nav-link">
									EventHandling
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/images"} className="nav-link">
									Images
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/difshapes"} className="nav-link">
									DidShapes
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/dragging"} className="nav-link">
									Dragging
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/dragText"} className="nav-link">
									DragText
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
}