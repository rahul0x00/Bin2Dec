import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="brandWrapper">
                    <h1 className="brand">Bin2Dec</h1>
                </div>
                <div className="navLinksWrapper">
                    <ul className="navLinks row">
                        <li className="navLink"><a href="/">Home</a></li>
                        <li className="navLink"><a target="_blank" rel="noopener noreferrer" href="https://github.com/rahul0x00/Bin2Dec">GitHub</a></li>
                        <li className="navLink"><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;