import React, { useState } from 'react'
import { fetchContent } from '../../helper/fetch-content'
import IframeRender from '../iframe-render_modules/'

const Content = (props) => {
    const [fetchedContent, setFetchedContent] = useState()
    console.log("State content: ", fetchedContent)

    const clickHandler = () => {
        fetchContent("https://npepa32v9l.execute-api.us-east-1.amazonaws.com/v2/?project_id=19989138&filename=python/03_daypratice_data_structures.html&ref=master", setFetchedContent)
    }

    return (
        <div>
            {props.lessons.filter(reference => reference.ref === props.selectLesson).map((content, key) => (
                <>
                    <div>
                        <IframeRender />
                        <button onClick={clickHandler}>receber dados</button>
                    </div>

                </>
            ))}
        </div>
    )
}

export default Content