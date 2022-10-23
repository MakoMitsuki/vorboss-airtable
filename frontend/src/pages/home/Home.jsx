import React, { useState, useEffect } from 'react';
import Datatable from '../../components/Datatable/Datatable';
import Stats from '../../components/Stats/Stats';
import "./Home.scss";
import Alert from '@mui/material/Alert';
import axios from 'axios';

const Home = () => {
    const [rows, setRows] = useState([]);
    const [alerts, setAlerts] = useState();
    const [loading, setLoading] = useState(true);
    
    const retrieveOrders = async () => {
        setLoading(true);
        await axios.get(`http://localhost:3001/orders`)
        .then((response) => {
            const { data, status } = response;
            if (status === 200) {
                setRows(data);
                setAlerts();
                setLoading(false);
            }
        }).catch((e) => {
            console.log(e);
            setAlerts(<Alert severity="error">{`Error - ${e}`}</Alert>);
        });
    }

    useEffect(()=> {
        retrieveOrders();
    }, []);

    return (
        <div className='home'>
            {alerts || <></>}
            <Stats orders={rows}/>
            <Datatable rows={rows} loading={loading}/>
        </div>
    )
}

export default Home;