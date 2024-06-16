import {Jumbotron, Reason, Service, Testi, FAQ, CTA, Footer } from '../components'
import Nav from '../components/Nav.jsx'
function Home() {
  return (
    <div>
        <Nav/>
        <Jumbotron/>
        <Reason/>
        <Service/>
        <Testi/>
        <FAQ/>
        <CTA/>
        <Footer/>
    </div>
    )
}

export default Home
