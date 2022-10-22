import * as dotenv from "dotenv";

// import routes
import { ordersRouteHandler } from "./routes/orders.route";

// configure express
dotenv.config();
import express = require("express");
const app = express();
import bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));

// configure airbase
const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = Airtable.base('app8wLQrrIMrnn673');

/* ROUTES */
// /orders - grabs entire order listing
app.get(`/orders`, ordersRouteHandler);

app.listen(process.env.PORT, () => {
    console.log("Vorboss Airtable Backend now listening at port: " + process.env.PORT);
});
