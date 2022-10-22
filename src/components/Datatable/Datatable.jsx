import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';

const columns = [
    { field: 'order_id', headerName: 'Order ID', width: 70 },
    {
        field: 'order_placed',
        headerName: 'Order Placed',
        type: "number"
    },
    {
        field: 'product_name',
        headerName: 'Product Name',
      },
    {
        field: 'price',
        headerName: 'Price',
        type: "number"
    },
    {
      field: 'first_name',
      headerName: 'First Name',
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
    },
    {
        field: 'email',
        headerName: 'Email',
    },
    {
        field: 'order_status',
        headerName: 'Order Status',
    },
  ];

const rows = [
    { order_id: 1, order_placed: '2021-10-05', product_name: 'cat keychain', price: 68.83, firstName: 'Jon', last_name: 'Snow', email: 'jonsnow@north.com', order_status: 'in_progress' },
    { order_id: 2, order_placed: '2021-08-27', product_name: 'i heart cat brooch', price: 28.00, firstName: 'Daenerys', last_name: 'Targaryen', email: 'daenerys@dothraki.com', order_status: 'shipped' },
  ];

const Datatable = () => {
    return (
        <div className='datatable'>
            {/*<DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
    />*/}
            hi
        </div>
    )
}

export default Datatable;