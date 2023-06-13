import Banner from './components/banner/Banner';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Partners from './components/partners/Partners';
import Contacts from './components/contacts/Contacts';
// import Footer from './components/footer/Footer';
import Copyright from './components/footer/Copyright';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <Banner />
      <div className="max-w-screen-xl mx-auto ">
        <About />
        <Skills />
        <Projects />
        <Partners />
        <Contacts />
        {/* <Footer /> */}
        <Copyright />
      </div>
    </div>
  );
}

export default App;
