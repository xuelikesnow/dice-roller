const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let rolls = [];

app.get("/roll-dice", (req, res) => {
	const randomNumber = Math.floor(Math.random() * 6) + 1;
	rolls.push(randomNumber);
	res.json({ randomNumber, rolls });
});

const PORT = 5000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
	console.log(`Dice roller listening on port ${PORT}`);
});
