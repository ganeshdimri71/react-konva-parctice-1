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
							<Link to={"/refapi"} className="nav-link">
								RefAPI
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/animation"} className="nav-link">
								Animation
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/undoredo"} className="nav-link">
								UndoRedo
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/z-index"} className="nav-link">
								Z-index
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/draw"} className="nav-link">
								Draw
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/move-click-draw1"} className="nav-link">
								ClMoDraw1
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
