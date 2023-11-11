import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Dice = ({ number }) => {
	return <div className="die">Dice Roll: {number}</div>;
};

const App = () => {
	const [rolls, setRolls] = useState([]);

	const rollDice = async () => {
		try {
			const response = await axios.get("http://localhost:5000/roll-dice");
			const randomNumber = response.data.randomNumber;
			setRolls([...rolls, randomNumber]);
		} catch (error) {
			console.error("Error fetching random number:", error);
		}
	};

	return (
		<div className="App" style={{ textAlign: "center" }}>
			<h1>Dice Roller</h1>
			<button onClick={rollDice}>Roll Dice</button>
			{rolls.map((roll, index) => (
				<Dice key={index} number={roll} />
			))}
		</div>
	);
};

export default App;
