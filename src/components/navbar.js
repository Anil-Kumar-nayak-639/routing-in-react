import React from 'react'
import { Link } from 'react-router-dom'

const NavigationPage = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to='/'>Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav" id='navlist'>
                    <li className="nav-item active" >
                        <Link className="nav-Link" to='/about' id='navabout'>About</Link>
                    </li><br />
                    <li className="nav-item active">
                        <Link className="nav-Link" to='/contact' id='navcontact'>Contact</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-Link" to='/yo' id='navyo'>Yo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavigationPage