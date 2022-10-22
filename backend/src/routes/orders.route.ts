import {Request, Response} from "express";
import { Order } from "../types/order";

export function ordersRouteHandler(req: Request, res: Response) {
    //const orderListing: Order[] = fetchProductDb();

    //res.status(200).send(orderListing);
    res.status(200).send({"response": "hey there"})
}