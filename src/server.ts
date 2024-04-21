import express from "express";
import airplaneRoute from "./routes/airplaneRoutes.js";
import cors from "cors";

const app = express();
// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Our airplane route
app.use("/api/airplane", airplaneRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});