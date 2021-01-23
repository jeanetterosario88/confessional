
import React from 'react'
import {Link} from 'react-router-dom'


const Secret = (props) => {
    return (
        <li>
            <Link to={`/secret/${props.item.id}`}> {props.item.title} </Link> 
            {props.item.likes} <i className="fas fa-heartbeat"></i>
            
        </li>
        )}

export default Secret