import { FC, ReactElement } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/css/main.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

const App: FC = (): ReactElement => {

  return (
    <HashRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
