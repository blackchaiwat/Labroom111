import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${process.env.PUBLIC_URL}/shopee/result`);
    }, [])

    return (
        <Fragment />
    );
};

export default Dashboard;
