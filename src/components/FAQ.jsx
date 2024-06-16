import React from 'react'

function FAQ() {
  return (
    <section id="FAQ">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5">
                    <h4>Frequently Asked Question</h4>
                    <p className="line-low">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-md-7">
                    <div className="accordion accordion-flush row gap-2" id="accordionFlushExample">
                        <div className="accordion-item border rounded border-secondary">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                                    sapiente molestiae nisi dolorem voluptatibus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded border-secondary">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                                    odio rem iste consequuntur tempore.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded border-secondary">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Deleniti quod amet veritatis sint culpa?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded border-secondary">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                                    accusamus adipisci ad delectus culpa.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded border-secondary">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    Bagaimana jika terjadi kecelakaan ?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Doloribus aperiam laborum eveniet rem nobis?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ
