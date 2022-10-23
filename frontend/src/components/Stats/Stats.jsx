import React, { useState, useEffect } from 'react';
import StatBox from './StatBox/StatBox';
import "./Stats.scss";

const Stats = ({ orders }) => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [ordersInProgress, setOrdersInProgress] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(()=> {
        const calc_totalOrders = orders.length;
        const calc_ordersInProgress = orders.filter((order) => order.order_status === 'in_progress').length;
        const calc_revenue = orders.filter((order) => order.status !== 'cancelled').reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);

        setTotalOrders(calc_totalOrders);
        setOrdersInProgress(calc_ordersInProgress);
        setRevenue(calc_revenue);
    }, [orders]);

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