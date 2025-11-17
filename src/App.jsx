import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
