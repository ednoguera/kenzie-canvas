import React, { useState } from 'react'
import { fetchContent } from '../../helper/fetch-content'
import IframeRender from '../iframe-render_modules/'
import parse from 'html-react-parser'
import { base_url } from '../../helper/url-content'

const Content = (props) => {
    const [fetchedContent, setFetchedContent] = useState()
    // console.log("State content: ", fetchedContent.getElementsByTagName('h2'))
    // console.log("state content: ", fetchedContent)

    // const pageTitle = fetchedContent.querySelectorAll('h1')
    // console.log(pageTitle)

    // const clickHandler = () => {
    //     fetchContent(base_url, setFetchedContent)
    // }

    return (
        <div>
            <div>
                {fetchedContent !== undefined ? <IframeRender src={base_url} /> : null}
                {/* <button onClick={clickHandler}>receber dados</button> */}
            </div>
        </div>
    )
}

export default Content