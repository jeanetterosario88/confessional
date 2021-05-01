import React, { Component } from 'react'
import CommentInput from './CommentInput'
import { ListGroup } from 'react-bootstrap'

const Comments = (props) => {

    return(
        <div>
            <CommentInput  theSecret={props.theSecret} />
            <ListGroup>
            <hr/>
            <b>Comments:</b>
            {props.commentContent.map(elem =>
                <ListGroup.Item key={elem.id}> {elem.content} </ListGroup.Item>
            )}
            </ListGroup>
        </div>
    )
}

export default Comments