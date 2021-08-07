import firebase from "firebase"
import { firebaseConfig } from "./config"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { CssBaseline } from "@material-ui/core"
import AlertDialog from "./components/AlertDialog"

if (!firebase.apps.length) {
  // checks if already connected
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  return (
      <div className="App">
        <CssBaseline />
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <AlertDialog />
        <Footer />
      </div>
  )
}
