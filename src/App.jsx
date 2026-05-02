import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
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
import Footer from './components/Footer'

// PÁGINAS NUEVAS
import PoliticaCookies from './pages/PoliticaCookies'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import AvisoLegal from './pages/AvisoLegal'

/* HOME (tu landing actual) */
const Home = () => {
  return (
    <>
      <TopBar />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <Treatments />
      <WhyUs />
      <FeaturedBox />
      <HowWeWork />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <Location />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <main className="bg-white text-black">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PÁGINAS LEGALES */}
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>

        {/* FOOTER SIEMPRE visible */}
        <Footer />
      </main>
    </Router>
  )
}

export default App