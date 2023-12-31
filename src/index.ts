import express from "express";
import routes from "./routes/route";

const app = express();
const port = 3000;

//middleware to parse JSON
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
