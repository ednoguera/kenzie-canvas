import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'

const Modules = () => {
    const [menuModules, setMenuModules] = useState(false)
    console.log("Estado do módulo:", menuModules)

    return (
        <>
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} />

        </>
    )
}

export default Modules