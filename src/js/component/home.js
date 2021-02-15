import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar.js";
import Cardgrande from "./cardgrande.js";
import Card from "./card.js";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="container">
			<div>
				<Navbar />
			</div>

			<div>
				<Cardgrande />
			</div>

			<div className="container1">
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
			</div>
		</div>
	);
}
