/**
 * @copyright 2024 RashmikaJayathilaka
 * @license Apache-2.0
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Project from "./components/Project";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}
 
export default App;