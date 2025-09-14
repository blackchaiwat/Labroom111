import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Router from './route'

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <Router />
            </Provider>
        </Fragment>
    )
}

export default App