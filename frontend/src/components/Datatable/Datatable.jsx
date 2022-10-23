import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 60
    },
    {
        field: 'order_placed',
        headerName: 'Order Placed',
        width: 120,
        type: "date",
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
        width: 150,
        renderCell: (params) => {
            return params.row.price.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
            })
        }
    },
    {
      field: 'first_name',
      headerName: 'First Name',
      width: 150,
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        width: 150,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
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
            return (<span className={`orderStatus ${params.row.order_status}`}>{params.row.order_status === 'in_progress' ? 'In Progress' : params.row.order_status}</span>)
        }
    },
  ];

const Datatable = ({ rows, loading }) => {

    return (
        <div className='datatable'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                autoHeight
                loading={loading}
            />
        </div>
    )
}

export default Datatable;