import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`),
);

export default app;
