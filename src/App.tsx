import Navbar from "./components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import SectionHero from "./components/sectionHero"
import Footer from "./components/footer"
import Cards from "./components/cards"
import SectionOne from "./components/sectionOne"
import SectionFour from "./components/sectionFour"
import Jumbotron from "./components/jumbotron"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <SectionHero />
      <SectionOne />
      <Cards />
      <Jumbotron />
      <SectionFour />
      <Footer />
    </ThemeProvider>
  )
}

export default App
