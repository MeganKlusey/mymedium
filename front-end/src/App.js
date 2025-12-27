import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/index.js";
import Explore from "./pages/explore.js";
import Article from "./pages/article.js";
import Favourites from "./pages/favourites.js";
import Creators from "./pages/creators.js";
import Topics from "./pages/topics.js";

function App() {
  const [data, setData] = useState([]);
  const [creators, setCreators] = useState([]);
  const [topics, setTopics] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [creatorsLoading, setCreatorsLoading] = useState(true);
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://guardian-api.mymediummk.workers.dev/data")
        .then((res) => res.json())
        .then((data) => {
          const results = data.response.results;
          const articlesFavourited = localStorage.getItem(
            "articles-favourited"
          );

          const finalData = articlesFavourited
            ? results.map((item) => {
                const isFavourited = JSON.parse(articlesFavourited)
                  .filter((item) => item.id && item.favourited)
                  .some((favourited) => item.id === favourited.id);
                return isFavourited ? { ...item, favourited: true } : item;
              })
            : results;

          setData(finalData);
          setDataLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 3600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchCreators = () => {
      fetch("https://guardian-api.mymediummk.workers.dev/creators")
        .then((res) => res.json())
        .then((data) => {
          const results = data.response.results;
          const extractedTags = results.map((item) =>
            item.tags ? item.tags[0] : null
          );
          const set = new Set();
          const filteredTags = extractedTags
            .filter((item) => item?.firstName)
            .filter((item) =>
              set.has(item.firstName) ? false : set.add(item.firstName)
            );
          const creatorsFollowed = localStorage.getItem("creators-followed");

          const finalCreators = creatorsFollowed
            ? filteredTags.map((item) => {
                const isFollowed = JSON.parse(creatorsFollowed)
                  .filter((item) => item.id && item.followed)
                  .some((followed) => item.id === followed.id);
                return isFollowed ? { ...item, followed: true } : item;
              })
            : filteredTags;

          setCreators(finalCreators);
          setCreatorsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchCreators();
    const interval = setInterval(fetchCreators, 3600000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchTopics = () => {
      fetch("https://guardian-api.mymediummk.workers.dev/topics")
        .then((res) => res.json())
        .then((data) => {
          const filteredResults = data.response.results.map((item) => {
            const { editions, ...rest } = item;
            return rest;
          });
          const filteredTopics = filteredResults.filter(
            (item) => !item.webTitle.includes("Do NOT use")
          );
          const topicsFollowed = localStorage.getItem("topics-followed");

          filteredTopics.sort(() => Math.random() - 0.5);

          setTopics(
            topicsFollowed ? JSON.parse(topicsFollowed) : filteredTopics
          );
          setTopicsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchTopics();
    const interval = setInterval(fetchTopics, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route
            path="/explore"
            element={
              <Explore
                data={data}
                setData={setData}
                topics={topics}
                setTopics={setTopics}
                creators={creators}
                setCreators={setCreators}
                dataLoading={dataLoading}
                creatorsLoading={creatorsLoading}
                topicsLoading={topicsLoading}
              />
            }
          ></Route>
          <Route
            path="/:id/*"
            element={
              <Article
                data={data}
                setData={setData}
                topics={topics}
                setTopics={setTopics}
                creators={creators}
                setCreators={setCreators}
              />
            }
          ></Route>
          <Route
            path="/favourites"
            element={
              <Favourites
                data={data}
                setData={setData}
                topics={topics}
                setTopics={setTopics}
                creators={creators}
                setCreators={setCreators}
                dataLoading={dataLoading}
              />
            }
          ></Route>
          <Route
            path="/creators"
            element={
              <Creators
                data={data}
                setData={setData}
                topics={topics}
                setTopics={setTopics}
                creators={creators}
                setCreators={setCreators}
                creatorsLoading={creatorsLoading}
              />
            }
          ></Route>
          <Route
            path="/topics"
            element={
              <Topics
                data={data}
                setData={setData}
                topics={topics}
                setTopics={setTopics}
                creators={creators}
                setCreators={setCreators}
                topicsLoading={topicsLoading}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
