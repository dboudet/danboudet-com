import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import { green, lightGreen } from "@material-ui/core/colors"

import Header from "./components/Header"
import HeroAlt from "./components/HeroAlt"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AlertDialog from "./components/AlertDialog"
import MoreLInks from "./components/MoreLinks"

export default function App() {
  const theme = createTheme({
    palette: {
      primary: lightGreen,
      secondary: green,
    },
  })

  return (
    <div className="App" id="top">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <HeroAlt />
          <About />
          <Portfolio />
          <MoreLInks />
          {/* <Contact /> */}
          <Footer />
          <AlertDialog />
        </ThemeProvider>
      </Router>
    </div>
  )
}
