import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Keynote from './components/Keynote'
import Sessions from './components/Sessions'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Keynote />
      {/* <Sessions /> */}
      <Speakers />
      <Sponsors />
      <CTA />
      <Footer />
    </>
  )
}
