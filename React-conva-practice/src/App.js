import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Rectangle from "./Component/Rectangle";
import Circles from "./Component/Circle";
import Regular from "./Component/RegularPolygon";
import RegShape from "./Component/RegularShape";
import EventHan from "./Component/EventHandling";
import Picture from "./Component/Pictures";
import DifShapes from "./Component/DifShapes";
import Dragging from "./Component/Draging";
import DragText from "./Component/DragableText1";
import Navbar from "./Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={"/rectangle"} component={Rectangle} />
				<Route exact path={"/circle"} component={Circles} />
				<Route exact path={"/polygon"} component={Regular} />
				<Route exact path={"/regshape"} component={RegShape} />
				<Route exact path={"/eventhandling"} component={EventHan} />
				<Route exact path={"/images"} component={Picture} />
				<Route exact path={"/difshapes"} component={DifShapes} />
				<Route exact path={"/dragging"} component={Dragging} />
				<Route exact path={"/dragText"} component={DragText} />
			</Switch>
		</Router>
	);
}

export default App;
