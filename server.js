import express from "express";
import cors from "cors"
const app = express()
const PORT = 3000;

app.use(cors({
	origin: "http://localhost:3001",
}
));
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World' });
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
