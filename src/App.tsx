import { FC, ReactElement } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/css/main.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App: FC = (): ReactElement => {

  return (
    <HashRouter>
      <div id='app'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
