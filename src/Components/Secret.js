
import React from 'react'
import {Link} from 'react-router-dom'


const Secret = (props) => {
    return (
        <li className = "likeNo">
            <Link to={`/secret/${props.item.id}`}> {props.item.title} </Link> 
             <i className="fa fa-heartbeat"></i> {props.item.likes}
            
        </li>
        )}

export default Secret