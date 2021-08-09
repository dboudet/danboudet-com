import firebase from "firebase"
import { firebaseConfig } from "./config"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HeroAlt from "./components/HeroAlt"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { createTheme, CssBaseline } from "@material-ui/core"
import { green, lightGreen } from '@material-ui/core/colors'
import AlertDialog from "./components/AlertDialog"
import { BrowserRouter as Router } from "react-router-dom"

if (!firebase.apps.length) {
  // checks if already connected
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const theme = createTheme({
    palette: {
      primary: lightGreen,
      secondary: green
    },
  })

  return (
    <div className="App" id="top">
      <Router>
        <CssBaseline />
        <Header />
        <HeroAlt />
        <About />
        <Portfolio />
        <Contact />
        <AlertDialog />
        <Footer />
      </Router>
    </div>
  )
}
