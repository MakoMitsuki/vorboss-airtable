export interface Order {
    id: number;
    order_placed: Date;
    product_name: string;
    price: number;
    first_name: string;
    last_name: string;
    address: string;
    email: string;
    order_status: string;
}