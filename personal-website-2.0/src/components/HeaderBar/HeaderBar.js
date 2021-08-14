import './HeaderBar.css'
import {NavLink} from "react-router-dom";

function HeaderBar (props) {
    return <header className="navbar-wrapper">
        <nav className="header navbar navbar-inverse bg-transparent">
            <div className="container-fluid navigation">
                <div className="navbar-title">
                    <NavLink to={'/'}>
                        <picture>
                            <img src="images/Logo.png" className="navbar-logo" alt="Logo"/>
                        </picture>
                    </NavLink>
                    <NavLink className="navbar-brand" to={'/'}>
                        Ryan Towle—<small>Designer, Programmer, Competitor</small>
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
}

export default HeaderBar
