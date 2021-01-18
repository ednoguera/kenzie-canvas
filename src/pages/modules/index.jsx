import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'
import SideBarLessons from '../../components/side-bar-lessons_modules/'
import Content from '../../components/render-content_modules/'
import { lessons } from '../../helper/lesson_array'

const Modules = () => {
    const [menuModules, setMenuModules] = useState(false)
    const [selectLesson, setSelectLesson] = useState("aula 01_lesson_1") //select first lesson by default

    return (
        <>
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} />
            {menuModules === true ? <SideBarLessons /> : null}
            <Content lessons={lessons} selectLesson={selectLesson} />
        </>
    )
}

export default Modules