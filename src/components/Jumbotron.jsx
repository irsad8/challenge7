import {Link} from 'react-router-dom'
import React from 'react'

function Jumbotron() {
  return (
    <div className="jumbotron py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-5 py-5">
                    <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                    <p className="line-low py-2">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                        dengan
                        harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to="/cars"><button type="button" className="btn bg-grass text-light"><b>Mulai Sewa
                                Mobil</b></button></Link>
                </div>
                <div className="img-fluid">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron
