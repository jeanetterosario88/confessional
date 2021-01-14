import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1> Header </h1>
            <Link to='/new'>Add A New Secret</Link>
        </div>
    )
}

export default Header
