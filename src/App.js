import Navbar from './components/navbar/Navbar';
import Copyright from './components/footer/Copyright';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PostsList from './components/projects/posts/AboutProjects';
import AboutProjects from './components/projects/posts/AboutProjects';
import ProjectBanner from './components/projects/posts/ProjectBanner';
import Vandal from './components/projects/posts/vandal/Vandal';
import GclassAMG from './components/projects/posts/gclassamg/GclassAMG';


const App = () => {
  return (
    <div>
      
        <div>
          <Navbar />
          <div>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path="aboutprojects" element={<AboutProjects />} >
              <Route path=":projectbanner" element={<ProjectBanner/>} />
              <Route path=":vandal" element={<Vandal/>} />
              <Route path=":gclassamg" element={<GclassAMG/>} />
              </Route>
            </Routes>{' '}
          </div>
          <Copyright/>
        </div>
    
    </div>
  );
}

export default App;
