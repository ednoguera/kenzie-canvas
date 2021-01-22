import React, { useState } from 'react'
import IframeRender from '../iframe-render_modules/'
import { base_url } from '../../helper/url-content'

const Content = (props) => {
    const [fetchedContent, setFetchedContent] = useState(base_url)

    return (
        <div>
            <div>
                {fetchedContent !== undefined ? <IframeRender src={props.selectLesson} title={props.title} /> : null}
            </div>
        </div>
    )
}

export default Content