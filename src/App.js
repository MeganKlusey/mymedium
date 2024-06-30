import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";
import Index from './pages/index.js'
import Explore from './pages/explore.js'
import Article from './pages/article.js'
import Favourites from './pages/favourites.js'
import Creators from './pages/creators.js'
import Topics from './pages/topics.js'

function App() {
  const [data, setData] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://content.guardianapis.com/technology?show-fields=thumbnail,body&show-tags=contributor&api-key=24859514-0472-4958-939a-9dcfabd248a3")
    .then(res => res.json())
    .then(data => {
      setData(data.response.results);
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    fetch("https://content.guardianapis.com/sections?api-key=24859514-0472-4958-939a-9dcfabd248a3")
    .then(res => res.json())
    .then(data => {
      const filteredData = data.response.results.map(item => {
        const {editions, ...rest} = item;
        return rest;
      })
      setTopics(filteredData);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></ Route>
          <Route path="/explore" element={<Explore data={data} setData={setData} topics={topics} setTopics={setTopics} />}></ Route>
          <Route path="/:id/*" element={<Article data={data} setData={setData} />}></ Route> 
          <Route path="/favourites" element={<Favourites />}></ Route>
          <Route path="/creators" element={<Creators data={data} setData={setData} />}></ Route>
          <Route path="/topics" element={<Topics topics={topics} setTopics={setTopics} />}></ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
