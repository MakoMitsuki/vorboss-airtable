"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouteHandler = void 0;
const dotenv = __importStar(require("dotenv"));
// configure airbase
dotenv.config();
const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = Airtable.base('app8wLQrrIMrnn673');
function ordersRouteHandler(req, res) {
    const orderList = [];
    base('Orders').select({ maxRecords: 20 }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            record._rawJson.fields['id'] = record._rawJson.fields['order_id']; // Assign new key
            delete record._rawJson.fields['order_id']; // Delete old key
            let newOrder = record._rawJson.fields;
            orderList.push(newOrder);
        });
        fetchNextPage();
    }, function done(err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(orderList);
        }
    });
}
exports.ordersRouteHandler = ordersRouteHandler;
