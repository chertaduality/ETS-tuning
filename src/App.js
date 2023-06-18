import Navbar from './components/navbar/Navbar';
import Copyright from './components/footer/Copyright';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Vandal from './components/projects/posts/vandal/Vandal';
import AboutProject from './components/projects/posts/AboutProject';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              {' '}
              <Route path="/" element={<Main />} />
              <Route path="aboutproject" element={<AboutProject />} />
            </Routes>{' '}
          </div>
        </div>
      </BrowserRouter>{' '}
    </div>
  );
}

export default App;
