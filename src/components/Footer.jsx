import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row gap-2">
                <div className="col-md-3">
                    <p className="line-low">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <a className="text-dark link" href="mailto:binarcarrental@gmail.com">binarcarrental@gmail.com</a>
                    <br/>
                    <a className="text-dark link" href="tel:081233334808">081-233-334-808</a>
                </div>
                <div className="col-md-2">
                    <ul className="navbar-nav  flex-grow-1 gap-md-2 line-low">
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Our Service</a>
                        </li>
                        <div className="nav-item">
                            <a className="nav-link" href="#why">Why Us</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#testimoni">Testimonial</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#FAQ">FAQ</a>
                        </div>
                    </ul>
                </div>
                <div className="col-md-3 line">
                    <p>Connect with us</p>
                    <span className="fa-stack mb-2">
                        <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                        <i className="fa-brands fa-facebook-f fa-stack-1x text-light"></i>
                    </span>
                    <span className="fa-stack mb-2">
                        <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                        <i className="fa-brands fa-instagram fa-stack-1x text-light"></i>
                    </span>
                    <span className="fa-stack mb-2">
                        <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                        <i className="fa-brands fa-twitter fa-stack-1x text-light"></i>
                    </span>
                    <span className="fa-stack mb-2">
                        <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                        <i className="fa-regular fa-envelope fa-stack-1x text-light"></i>
                    </span>
                    <span className="fa-stack mb-2">
                        <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                        <i className="fa-brands fa-twitch fa-stack-1x text-light"></i>
                    </span>
                </div>
                <div className="col-md-3">
                    <p>&#169; Copyright Binar 2022</p>
                    <a className="navbar-brand bg-biru text-biru" href="#">logo BCR</a>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
