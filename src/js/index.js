//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//import your index.scss file into the bundle
import "../styles/index.scss";

//creando un componente
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">{<i className="far fa-clock"></i>}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 24}</div>

			<div className="two">{props.digitTwo % 60}</div>
			<div className="one">{props.digitOne % 60}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

//establecer una fun.intervalo//setIntervalo// llama a una fun. en pocos segundos
let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 6000);
	const three = Math.floor(counter / 600);
	const two = Math.floor(counter / 60);
	const one = Math.floor(counter / 1);
	// console.log(four, three, two, one);
	counter++;
 
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
