import React, { useState, useEffect } from 'react';
import Datatable from '../../components/Datatable/Datatable';
import Stats from '../../components/Stats/Stats';
import "./Home.scss";
import Alert from '@mui/material/Alert';
import axios from 'axios';

const Home = () => {
    const [rows, setRows] = useState([]);
    const [alerts, setAlerts] = useState();
    const [totalOrders, setTotalOrders] = useState(0);
    const [ordersInProgress, setOrdersInProgress] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(()=> {
        axios.get(`http://localhost:3001/orders`).then((response) => {
            const { data, status } = response;
            if (status === 200) {
                //setRows(data);
                setAlerts();
                //setRows(rows);
                setTotalOrders(data.length);
                setOrdersInProgress(data.filter((order) => order.status === 'in_progress').length);
                setRevenue(
                    data.filter((order) => order.status !== 'cancelled')
                        .reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)
                );
            }
        }).catch((e) => {
            console.log(e);
            setAlerts(<Alert severity="error">{`Error - ${e}`}</Alert>);
        });
    }, []);

    return (
        <div className='home'>
            <h1 className='title'>Purrfect Creations</h1>
            {alerts || <></>}
            <Stats totalOrders={totalOrders} ordersInProgress={ordersInProgress} revenue={revenue}/>
            <Datatable rows={rows}/>
        </div>
    )
}

export default Home;