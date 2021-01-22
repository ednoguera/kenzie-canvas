import React from 'react'
import { SideBarLessonsMenu } from '../../style/styled-components'
import Sider from './drop-down-menu'
import { lessons } from '../../helper/lesson_array'
import SiderLives from './sider-lives'

const SideBarLessons = (props) => {


    return (
        <SideBarLessonsMenu>
            <SiderLives title="ASSISTIR LIVE!" renderLives={props.renderLives} />
            <Sider mod="Õ" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="A" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="B" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="C" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="D" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="E" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="F" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="G" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="H" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="I" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
        </SideBarLessonsMenu>
    )
}

export default SideBarLessons