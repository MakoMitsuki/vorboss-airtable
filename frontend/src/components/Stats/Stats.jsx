import React from 'react';
import StatBox from './StatBox/StatBox';
import "./Stats.scss";

const Stats = ({ totalOrders, ordersInProgress, revenue }) => {
    return (
        <div className='stats'>
            <StatBox title="Total Orders" stat={totalOrders}/>
            <StatBox title="Orders In Progress" stat={ordersInProgress}/>
            <StatBox title="Revenue"
                stat={revenue.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                })}
            />
        </div>
    )
}

export default Stats;