import React, { useState, useEffect } from 'react';
import Datatable from '../../components/Datatable/Datatable';
import Stats from '../../components/Stats/Stats';
import "./Home.scss";
import Alert from '@mui/material/Alert';
import axios from 'axios';

const Home = () => {
    const [rows, setRows] = useState([]);
    const [alerts, setAlerts] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:3001/orders`)
        .then((response) => {
            const { data, status } = response;
            if (status === 200) {
                setRows(data);
                setAlerts();
                
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
            <Stats orders={rows}/>
            <Datatable rows={rows}/>
        </div>
    )
}

export default Home;