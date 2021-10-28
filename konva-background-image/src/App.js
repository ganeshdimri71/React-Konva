import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DragDrop from "./Component/DragandDrop";
import DragDrop1 from "./Component/DragandDrop1";
import Rotation from "./Component/practice1";
import Navbar from "./Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={"/drag-drop"} component={DragDrop} />
				<Route exact path={"/drag-drop1"} component={DragDrop1} />
				<Route exact path={"/rotation"} component={Rotation} />
			</Switch>
		</Router>
	);
}

export default App;
