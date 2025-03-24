import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">
                        {/* <strong>Home</strong> */}
                        <i className="bi bi-house-fill p-3"></i>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}