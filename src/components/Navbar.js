import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <h1 className="text-warning">USERS</h1>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to="/" className={({isActive})=>isActive ? 'link active' : 'link'}>HOME</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
