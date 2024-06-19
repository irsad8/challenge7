import React, {useEffect} from 'react'

function Testi() {
    useEffect(()=>{
        $(".owl-carousel").owlCarousel({
            center: true,
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            paginationSpeed: 500,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                },
            },
        })
        
        var owl = $(".owl-carousel");
        owl.owlCarousel();
        $(".btn-right").click(function () {
            owl.trigger("next.owl.carousel");
        });
        $(".btn-left").click(function () {
            owl.trigger("prev.owl.carousel", [300]);
        });
    },[])

  return (
    <section className="testimonial container-fluid p-0 pt-5" id="testimonial">
        <div className="container-fluid p-0 pt-5">
            <center>
                <h2 className="fs-3 fw-bold">Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </center>
            <div className="owl-carousel owl-theme">
                <div className="item py-5 bg-gray mx-md-2 px-2 ">
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <img src="/assets/img/img_photo.svg"
                                className="testimonial-image testimonial-image rounded-circle" alt="GambarPhoto1"/>
                        </div>
                        <div className="col-md d-flex flex-column align-center justify-content-center">
                            <div className="star">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit?
                                Exercitationem earum
                                officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores
                                eligendi,
                                illo quidem
                                modi
                                fugit.</p>
                            <p className="user fw-bold">John Dee 32, Turen</p>
                        </div>
                    </div>
                </div>

                <div className="item py-5 bg-gray mx-md-2 px-2">
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <img src="/assets/img/img_photo2.svg" className="testimonial-image rounded-circle"
                                alt="GambarPhoto2"/>
                        </div>
                        <div className="col-md d-flex flex-column align-center justify-content-center">
                            <div className="star">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit?
                                Exercitationem earum
                                officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores
                                eligendi,
                                illo quidem
                                modi
                                fugit.</p>
                            <p className="user fw-bold">John Dee 32, Sedayu</p>
                        </div>
                    </div>
                </div>

                <div className="item py-5 bg-gray mx-md-2 px-2">
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <img src="/assets/img/img_photo.svg" className="testimonial-image rounded-circle"
                                alt="GambarPhoto3"/>
                        </div>
                        <div className="col-md d-flex flex-column align-center justify-content-center">
                            <div className="star">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus
                                aspernatur
                                alias ab!
                                Molestiae in dolores voluptates alias odit. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                Lorem, ipsum.</p>
                            <p className="user fw-bold">Handy, Malang</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-3">
                    <div className="col text-center">

                        <button className="btn rounded-circle btn-left mx-2 slide-con" type="button"><i
                                className="bi bi-chevron-left p-0" style={{fontWeight: 900}}></i></button>

                        <button className="btn rounded-circle btn-right mx-2 slide-con" type="button"><i
                                className="bi bi-chevron-right p-0" style={{fontWeight: 900}}></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testi
