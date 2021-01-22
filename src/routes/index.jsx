import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AccesPage from '../pages/access/'
import Modules from '../pages/modules/'

const Routes = () => {
    const [token, setToken] = useState(localStorage.getItem('accessToken'))
    console.log(token)

    return (
        <Switch>
            <Route exact path="/">
                {token === null ? <Redirect to='/acesso' /> : <Redirect to='/modulos' />}
            </Route>
            <Route exact path="/acesso">
                {token === null ? <AccesPage /> : <Redirect to='modulos' />}
            </Route>
            <Route exact path="/modulos">
                <Modules />
                {/* {token === null ? <Redirect to="/acesso" /> : <Modules />} */}
            </Route>
        </Switch>
    )
}

export default Routes