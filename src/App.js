import About from './components/About/About';
import Container from './components/Container/Container';
import Favorite from './components/Favorite/Favorite';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
