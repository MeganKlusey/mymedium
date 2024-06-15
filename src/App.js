import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/index.js'
import Explore from './pages/explore.js'
import Article from './pages/article.js'
import Favourites from './pages/favourites.js'
import Creators from './pages/creators.js'
import Topics from './pages/topics.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></ Route>
          <Route path="/explore" element={<Explore />}></ Route>
          <Route path="/:id/*" element={<Article />}></ Route>
          <Route path="/favourites" element={<Favourites />}></ Route>
          <Route path="/creators" element={<Creators />}></ Route>
          <Route path="/topics" element={<Topics />}></ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
