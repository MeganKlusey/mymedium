import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/index.js'
import Explore from './pages/explore.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></ Route>
          <Route path="/explore" element={<Explore />}></ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
