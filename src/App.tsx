
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollBtn />
    </>
  )
}

export default App
