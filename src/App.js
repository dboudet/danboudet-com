import firebase from 'firebase'
import { firebaseConfig } from './config'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

if(!firebase.apps.length){ // checks if already connected
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}