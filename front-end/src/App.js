import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Index from './pages/index.js'
import Explore from './pages/explore.js'
import Article from './pages/article.js'
import Favourites from './pages/favourites.js'
import Creators from './pages/creators.js'
import Topics from './pages/topics.js'

function App() {
  const [data, setData] = useState([]);
  const [creators, setCreators] = useState([]);
  const [topics, setTopics] = useState([]);

  const apiUrl =
  // process.env.NODE_ENV === 'development'
  // ? 'http://0.0.0.0:8000' : 
  process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/data`)
    .then(res => res.json())
    .then(data => {
      setData(data.response.results);
    })
    .catch(err => console.log(err))
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}/creators`)
    .then(res => res.json())
    .then(data => {
      const results = data.response.results;
      const extractedTags = results.map(item => item.tags ? item.tags[0] : null);
      const set = new Set();
      const filteredTags = extractedTags.filter(item => item?.firstName ).filter(item => set.has(item.firstName) ? false : set.add(item.firstName));
      
      setCreators(filteredTags);
    })
    .catch(err => console.log(err))
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}/topics`)
    .then(res => res.json())
    .then(data => {
      const filteredData = data.response.results.map(item => {
        const {editions, ...rest} = item;
        return rest;
      })
      filteredData.sort(() => Math.random() - 0.5);
      setTopics(filteredData);
    })
    .catch(err => console.log(err))
  }, [apiUrl]);

  return (
    <div className="App">
      <BrowserRouter basename="/mymedium">
        <Routes>
          <Route path="/" element={<Index />}></ Route>
          <Route path="/explore" element={<Explore data={data} setData={setData} topics={topics} setTopics={setTopics} creators={creators} setCreators={setCreators} />}></ Route>
          <Route path="/:id/*" element={<Article data={data} setData={setData} topics={topics} setTopics={setTopics} creators={creators} setCreators={setCreators} />}></ Route> 
          <Route path="/favourites" element={<Favourites data={data} setData={setData} topics={topics} setTopics={setTopics} creators={creators} setCreators={setCreators} />}></ Route>
          <Route path="/creators" element={<Creators data={data} setData={setData} topics={topics} setTopics={setTopics} creators={creators} setCreators={setCreators} />}></ Route>
          <Route path="/topics" element={<Topics data={data} setData={setData} topics={topics} setTopics={setTopics} creators={creators} setCreators={setCreators} />}></ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
