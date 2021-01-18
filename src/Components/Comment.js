import React, { Component } from 'react'

const Comment = (props) => {
    console.log(props.commentContent)
    if(!props.commentContent.length) return (<p>There are no comments for this secret</p>)
    return(
        <div>
            {props.commentContent.map(elem =>
                <ul>
                    <li key={elem.id}>{elem.content}</li>
                </ul>
            )}
        </div>
    )
}

export default Comment