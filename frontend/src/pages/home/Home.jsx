import React from 'react';
import Datatable from '../../components/Datatable/Datatable';
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <h1 className='title'>Purrfect Creations</h1>
            <Datatable/>
        </div>
    )
}

export default Home;