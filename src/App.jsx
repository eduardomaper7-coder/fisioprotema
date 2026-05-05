import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import CertificacionSection from './components/CertificacionSection' // 👈 AÑADIDO
import Footer from './components/Footer'

import PoliticaCookies from './pages/PoliticaCookies'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import AvisoLegal from './pages/AvisoLegal'

const Home = () => {
  return (
    <>
      <Hero />
      <Treatments />
      <WhyUs />
      <FeaturedBox />
      <HowWeWork />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <Location />
      <ContactSection />
      <CertificacionSection /> {/* 👈 NUEVA SECCIÓN */}
    </>
  )
}

function App() {
  return (
    <Router>
      <main className="bg-white text-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  )
}

export default App