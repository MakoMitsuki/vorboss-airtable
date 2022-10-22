import * as dotenv from "dotenv";

// import routes
import { ordersRouteHandler } from "./routes/orders.route";

// configure express
dotenv.config();
import express = require("express");
const app = express();
import bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json({ limit: "16mb" }));
app.use(cors());

/* ROUTES */
// /orders - grabs entire order listing
app.get(`/orders`, ordersRouteHandler);

app.listen(process.env.PORT, () => {
    console.log("Vorboss Airtable now listening at port: " + process.env.PORT);
});
