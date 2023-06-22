import Navbar from './components/navbar/Navbar';
import Copyright from './components/footer/Copyright';
import Main from './components/main/Main';
import { Route, Routes} from 'react-router-dom';
import AboutProjects from './components/projects/posts/AboutProjects';
import Vandal from './components/projects/posts/vandal/Vandal';
import GclassAMG from './components/projects/posts/gclassamg/GclassAMG';
import AboutSkills from './components/skills/AboutSkills';
import Paint from './components/skills/aboutskills/Paint';
import Detail from './components/skills/aboutskills/Detail';
import Carbon from './components/skills/aboutskills/Carbon';
import Body from './components/skills/aboutskills/Body';
import Add from './components/skills/aboutskills/Add';
import Tailoring from './components/skills/aboutskills/Tailoring';
import Clearing from './components/skills/aboutskills/Clearing';
import Fiberglass from './components/skills/aboutskills/Fiberglass';
import Model3d from './components/skills/aboutskills/Model3d';
import Service from './components/skills/aboutskills/Service';


const App = () => {
  return (
    <div>
      
        <div>
          <Navbar />
          <div>
            <Routes>

              <Route path="/" element={<Main />} />
              <Route path='aboutskills' element={<AboutSkills/>}>
                    <Route path=":paint" element={<Paint />} />
                    <Route path=":detail" element={<Detail />} />
                    <Route path=":carbon" element={<Carbon />} />
                    <Route path=":body" element={<Body />} />
                    <Route path=":add" element={<Add />} />
                    <Route path=":tailoring" element={<Tailoring/>} />
                    <Route path=":clearing" element={<Clearing />} />
                    <Route path=":fiberglass" element={<Fiberglass />} />
                    <Route path=":model3d" element={<Model3d />} />
                    <Route path=":service" element={<Service />} />
              </Route>
              <Route path="aboutprojects" element={<AboutProjects />} >
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
