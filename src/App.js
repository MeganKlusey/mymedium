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
  const [topics, setTopics] = useState(() => {
    const savedTopics = localStorage.getItem('topic');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  useEffect(() => {
    fetch("https://content.guardianapis.com/technology?show-fields=thumbnail,body&show-tags=contributor&api-key=4b5d97c0-1079-4e16-af07-1e8ec88f1918")
    .then(res => res.json())
    .then(data => {
      setData(data.response.results);
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    fetch("https://content.guardianapis.com/sections?api-key=4b5d97c0-1079-4e16-af07-1e8ec88f1918")
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

  useEffect(() => {
    localStorage.setItem('topics', JSON.stringify(topics));
  }, [topics]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></ Route>
          <Route path="/explore" element={<Explore data={data} setData={setData} 
            topics={topics} setTopics={setTopics} />}>
            <Route path=":id/*" element={<Article />}></ Route>
          </ Route>
          <Route path="/favourites" element={<Favourites />}></ Route>
          <Route path="/creators" element={<Creators />}></ Route>
          <Route path="/topics" element={<Topics topics={topics} />}></ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
