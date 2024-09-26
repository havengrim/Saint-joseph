import Navbar from "@/components/Navbar"
import Hero from "./Hero"
import AboutUs from "./AboutUs"
import Education from "./Education"
import Accomplishments from "./Accomplishments"
import News from "./News"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <Education />
        <Accomplishments />
        <News />
    </div>
  )
}

export default Home