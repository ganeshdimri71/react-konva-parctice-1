import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RefAPI from "./Component/RefAPI";
import Animation from "./Component/SimpleAnimation";
import UndoRedo from "./Component/UndoRedo";
import Zindex from "./Component/Z-index";
import Draw from "./Component/Draw";
import Drawing from "./Component/ClickMoveDraw1";
import Navbar from "./Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={"/refapi"} component={RefAPI} />
				<Route exact path={"/animation"} component={Animation} />
				<Route exact path={"/undoredo"} component={UndoRedo} />
				<Route exact path={"/z-index"} component={Zindex} />
				<Route exact path={"/draw"} component={Draw} />
				<Route exact path={"/move-click-draw1"} component={Drawing} />
			</Switch>
		</Router>
	);
}

export default App;
