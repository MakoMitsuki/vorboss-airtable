"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouteHandler = void 0;
function ordersRouteHandler(req, res) {
    //const orderListing: Order[] = fetchProductDb();
    //res.status(200).send(orderListing);
    res.status(200).send({ "response": "hey there" });
}
exports.ordersRouteHandler = ordersRouteHandler;
