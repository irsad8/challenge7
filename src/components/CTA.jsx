import {Link} from 'react-router-dom'
import React from 'react'

function CTA() {
  return (
    <section id="CTA">
        <div className="container my-5 text-center">
            <div className="row card bg-biru text-light">
                <div className="card-body pb-5">
                    <h3 className="card-title pt-4">Sewa Mobil di (Lokasimu) Sekarang</h3>
                    <p className="card-text py-4 line-low" style="width: 40%; margin: auto;">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/cars"><button type="button" className="btn bg-grass text-light"><b>Mulai Sewa
                                Mobil</b></button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA
