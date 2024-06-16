import React from 'react'

function Testi() {
  return (
    <section id="why">
        <div className="container">
            <h4>Why Us?</h4>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className="row gap-4">
                <div className="col-md card">
                    <div className="card-body">
                        <span className="fa-stack mb-2">
                            <i className="fa-solid fa-circle fa-stack-2x text-warning"></i>
                            <i className="fa-solid fa-thumbs-up fa-stack-1x text-light"></i>
                        </span>
                        <h5 className="card-title">Mobil Lengkap</h5>
                        <p className="card-text line-low">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                </div>
                <div className="col-md card">
                    <div className="card-body">
                        <span className="fa-stack mb-2">
                            <i className="fa-solid fa-circle fa-stack-2x text-danger"></i>
                            <i className="fa-solid fa-tag fa-stack-1x text-light"></i>
                        </span>
                        <h5 className="card-title">Harga Murah</h5>
                        <p className="card-text line-low">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                            mobil
                            lain
                        </p>
                    </div>
                </div>
                <div className="col-md card">
                    <div className="card-body">
                        <span className="fa-stack mb-2">
                            <i className="fa-solid fa-circle fa-stack-2x text-biru"></i>
                            <i className="fa-regular fa-clock fa-stack-1x text-light"></i>
                        </span>
                        <h5 className="card-title">Layanan 24 Jam</h5>
                        <p className="card-text line-low">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                            tersedia di
                            akhir minggu
                        </p>
                    </div>
                </div>
                <div className="col-md card">
                    <div className="card-body">
                        <span className="fa-stack mb-2">
                            <i className="fa-solid fa-circle fa-stack-2x text-grass"></i>
                            <i className="fa-solid fa-award fa-stack-1x text-light"></i>
                        </span>
                        <h5 className="card-title">Sopir Profesional</h5>
                        <p className="card-text line-low">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                            tepat waktu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testi
