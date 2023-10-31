import express from "express";
import cors from "cors"
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors({
	origin: "http://localhost:3001",
}
));

app.get('/', (req, res) => {
	res.json({ message: 'Hello, World' });
})

// Variable to store the last received data
let lastReceivedData = null;

// POST endpoint to accept data from Raspberry Pi (or any other client)/ Current only works with the sample web app
app.post('/data', (req, res) => {
	// The data sent in the request body
	const { text } = req.body;
	// Store the received data
	lastReceivedData = text;
	
	console.log("Received data:", text);

	// Send a response back to the client
	res.json({ message: 'Data received successfully' });
});

// GET endpoint to fetch the last received data
app.get('/data', (req, res) => {
	if (lastReceivedData) {
		res.json(lastReceivedData);
	} else {
		res.status(404).json({ message: 'No data available' });
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
