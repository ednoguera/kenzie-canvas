import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'
import SideBarLessons from '../../components/side-bar-lessons_modules/'
import Content from '../../components/render-content_modules/'
import { lessons } from '../../helper/lesson_array'
import Instructions from '../../components/00-first-lesson_modules/'

const Modules = (props) => {
    const [menuModules, setMenuModules] = useState(false)
    const [selectLesson, setSelectLesson] = useState(null) //select first lesson by default
    const [lessonTitle, setLessonTitle] = useState("Aula 1")
    console.log(menuModules)

    return (
        <div >
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} />
            {menuModules === true ? <SideBarLessons setState={setSelectLesson} setLessonTitle={setLessonTitle} /> : null}
            {selectLesson === null ? <Instructions /> : <Content lessons={lessons} selectLesson={selectLesson} title={lessonTitle} />}
        </div>
    )
}

export default Modules