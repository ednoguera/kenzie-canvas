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
                {token === "2fas1df23agfalkjsgd4f65" ? <Modules /> : <Redirect to="/acesso" />}
            </Route>
        </Switch>
    )
}

export default Routes