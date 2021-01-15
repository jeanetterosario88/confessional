  
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <h1>Confessional</h1>
            <div className="header__links"><Link to='/new'>Add A New Secret</Link>     
            <Link to='/'>Home</Link></div>
        </header>
    )
}

export default Header