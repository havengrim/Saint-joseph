import Navbar from "@/components/Navbar"
import Hero from "./Hero"
import AboutUs from "./AboutUs"
import Education from "./Education"
import Accomplishments from "./Accomplishments"
import News from "./News"
import JoinUs from "./JoinUs"
import Footer from "@/components/Footer"


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <Education />
        <Accomplishments />
        <News />
        <JoinUs />
        <Footer />
    </div>
  )
}

export default Home