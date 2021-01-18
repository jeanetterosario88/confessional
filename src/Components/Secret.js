
import React from 'react'
import {Link} from 'react-router-dom'


const Secret = (props) => {
    return (
        <li>
            <Link to={`/secret/${props.item.id}`}>{props.item.title} </Link> 
            <i className="fas fa-heartbeat"></i>
            <p>{props.item.likes}</p>
            
        </li>
        )}

export default Secret