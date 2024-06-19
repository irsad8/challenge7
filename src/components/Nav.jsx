import React from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-expand-md py-2 bg-gray sticky-top">
        <div className="container">
            <a className="navbar-brand bg-biru text-biru" href="/">logo BCR</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" aria-labelledby="offcanvasDarkNavbarLabel" id="navbar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">BCR</h5>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ms-md-auto gap-md-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Our Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#why">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#FAQ">FAQ</a>
                        </li>
                        <button type="button" className="btn bg-grass nav-item text-light"><b>Register</b></button>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
