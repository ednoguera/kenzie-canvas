import React, { useState } from 'react'

const Content = (props) => {
    return (
        <div>
            {props.lessons.filter(reference => reference.ref === props.selectLesson).map((content, key) => (
                <>
                    <h2 key={key}>{content.nome}</h2>
                    <div>
                        <iframe src={content.video_url} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        <p><a href="https://vimeo.com/496843494">Nate Robinson: The Crossover (Squarespace)</a> from <a href="https://vimeo.com/passionparis">Passion Paris</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                    </div>
                    <div>
                        <p>
                            {content.content}
                        </p>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Content