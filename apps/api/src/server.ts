import express from "express";
import RegisterRoutes from "./routes";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(express.json());
app.use(cors());

RegisterRoutes(app);

app.get("/", (_, res) => {
	res.send("Hello World");
});

app.use(errorHandler);

app.listen(3001, () => {
	console.log("Server is running on port 3000");
});
