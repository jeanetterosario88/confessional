import React, { Component } from 'react'
import CommentInput from './CommentInput'

const Comments = (props) => {

    return(
        <div>
            <CommentInput  theSecret={props.theSecret} />
            {props.commentContent.map(elem =>
                <ul key={elem.id}>
                    <li>{elem.content}</li>
                </ul>
            )}
        </div>
    )
}

export default Comments