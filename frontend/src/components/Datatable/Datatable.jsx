import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'order_id', headerName: 'Order ID', width: 80 },
    {
        field: 'order_placed',
        headerName: 'Order Placed',
        width: 120,
    },
    {
        field: 'product_name',
        headerName: 'Product Name',
        width: 160,
      },
    {
        field: 'price',
        headerName: 'Price',
        type: "number",
        width: 120,
    },
    {
      field: 'first_name',
      headerName: 'First Name',
      width: 200,
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        width: 200,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 250,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 180,
    },
    {
        field: 'order_status',
        headerName: 'Order Status',
        width: 160,
        renderCell: (params) => {
            return (<span className={`orderStatus ${params.row.order_status}`}>{params.row.order_status}</span>)
        }
    },
  ];

/*const rows = [
    { id: 1, order_placed: '2021-10-05', product_name: 'cat keychain', price: 68.83, first_name: 'Jon', last_name: 'Snow', address: '123 North Rd', email: 'jonsnow@north.com', order_status: 'in_progress' },
    { id: 2, order_placed: '2021-08-27', product_name: 'i heart cat brooch', price: 28.00, first_name: 'Daenerys', last_name: 'Targaryen', address: '123 North Rd', email: 'daenerys@dothraki.com', order_status: 'shipped' },
    { id: 3, order_placed: '2021-08-27', product_name: 'i heart cat brooch', price: 28.00, first_name: 'Daenerys', last_name: 'Targaryen', address: '123 North Rd', email: 'daenerys@dothraki.com', order_status: 'shipped' },
    { id: 4, order_placed: '2021-08-10', product_name: 'little canine', price: 10.20, first_name: 'Sansa', last_name: 'Stark', address: '3123 South Rd', email: 'sansa@stark.uk', order_status: 'placed' },
    { id: 5, order_placed: '2021-11-12', product_name: 'i heart cat brooch', price: 28.00, first_name: 'Daenerys', last_name: 'Targaryen', address: '123 North Rd', email: 'daenerys@dothraki.com', order_status: 'cancelled' },
    { id: 6, order_placed: '2021-08-27', product_name: 'i heart cat brooch', price: 28.00, first_name: 'Daenerys', last_name: 'Targaryen', address: '123 North Rd', email: 'daenerys@dothraki.com', order_status: 'shipped' },
  ];*/

const Datatable = (rows) => {

    return (
        <div className='datatable'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    )
}

export default Datatable;