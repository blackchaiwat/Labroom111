import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './ContentRoutes';
import Layout from '../layout/Layout';

const LayoutRoutes = () => {
  return (
    <Fragment>
      <Routes>
        {routes.map(({ path, component }, i) => (
          <Route element={<Layout />} key={i}>
            <Route path={path} element={component} />
          </Route>
        ))}
      </Routes>
    </Fragment>
  );
};

export default LayoutRoutes;