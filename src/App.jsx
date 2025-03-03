import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Project from "./components/Project/project";
import Education from './components/Education/education';
import Contact from './components/Contact/contact'
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;