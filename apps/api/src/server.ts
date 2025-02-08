import express from "express";
import RegisterRoutes from "./routes";

const app = express();

RegisterRoutes(app);

app.get("/", (_, res) => {
	res.send("Hello World");
});

app.listen(3001, () => {
	console.log("Server is running on port 3000");
});
