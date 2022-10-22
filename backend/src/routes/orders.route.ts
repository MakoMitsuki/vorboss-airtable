import * as dotenv from "dotenv";
import {Request, Response} from "express";
import { Order } from "../types/order";

// configure airbase
dotenv.config();
const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = Airtable.base('app8wLQrrIMrnn673');

export function ordersRouteHandler(req: Request, res: Response) {
    const orderList: Order[] = [];
    base('Orders').select().eachPage(function page(records: any, fetchNextPage: any) {    
        records.forEach(function(record: any) {
            orderList.push(record._rawJson.fields);
        });

        fetchNextPage();
    
    }, function done(err: any) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(orderList);
        }
    });
}
