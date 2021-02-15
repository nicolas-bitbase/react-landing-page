import React from "react";
import ReactDOM from "react-dom";

export default function Card() {
	return (
		<div className="card1">
			<img
				src="https://picsum.photos/200/150"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
