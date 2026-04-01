import express from "express";
import numberRouter from "./routes/number.route.js"

const app = express();
app.use(express.json()); // middleware

app.use("/numbers", numberRouter);

app.listen(3020, () => {
    console.log("Server running on http://localhost:3020");
})