import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'
import SideBarLessons from '../../components/side-bar-lessons_modules/'

const Modules = () => {
    const [menuModules, setMenuModules] = useState(false)
    console.log("Estado do módulo:", menuModules)

    return (
        <>
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} />
            {menuModules === true ? <SideBarLessons /> : null}
        </>
    )
}

export default Modules