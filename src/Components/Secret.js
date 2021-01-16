
import React from 'react'
import {Link} from 'react-router-dom'


const Secret = (props) => {
    return (
        <li>
            <Link to={`/secret/${props.item.index}`}>{props.item.title} </Link> 
            <i class="fas fa-heartbeat"></i>
        </li>
        )}

export default Secret