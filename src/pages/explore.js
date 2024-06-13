import { useEffect, useState } from "react";
import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import Topic from "./components/Topic";

function Explore() {
  const [data, setData] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://content.guardianapis.com/technology?show-fields=thumbnail,body&show-tags=contributor&api-key=4b5d97c0-1079-4e16-af07-1e8ec88f1918")
    .then(res => res.json())
    .then(data => {
      setData(data.response.results);
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://content.guardianapis.com/sections?api-key=4b5d97c0-1079-4e16-af07-1e8ec88f1918")
    .then(res => res.json())
    .then(data => {
      setTopics(data.response.results);
    })
    .catch(err => console.log(err));
  }, []);

  let creators = filterCreators(data);

  function filterCreators(array) {
    let filteredCreators = array.filter(item => item?.tags[0]?.firstName);
    return filteredCreators;
  }

  let randomCreatorIndex = Math.floor(Math.random() * (creators.length-1));

  let randomTopicIndex = Math.floor(Math.random() * (topics.length-2));

  return (
    <div className="Explore lg:h-screen">
      <div className="lg:h-screen">
        <Navbar />
        <div className="flex h-auto lg:h-[90vh] lg:overflow-hidden relative mt-[10vh] lg:mt-0 relative">
          <div className="flex flex-col lg:flex-row p-2.5 xs:p-5 w-full">
            <div className="flex flex-col md:flex-row w-full lg:w-3/4 gap-8 md:gap-5">
              <div className="w-full md:w-1/2">
                {data && data.slice(0,1).map((data) => (
                  <ArticlePreview topStory title={data?.webTitle} thumbnail={data?.fields?.thumbnail} body={data?.fields.body} firstName={data?.tags[0]?.firstName} lastName={data?.tags[0]?.lastName} webPublicationDate={data?.webPublicationDate} />
                ))}
              </div>
              <div className="grid grid-rows-4 w-full md:w-1/2 h-full justify-stretch gap-5 border-t md:border-0 pt-4 md:pt-0">
                {data && data.slice(1,5).map((data) => (
                  <ArticlePreview title={data?.webTitle} thumbnail={data?.fields.thumbnail} firstName={data?.tags[0]?.firstName} lastName={data?.tags[0]?.lastName}  webPublicationDate={data?.webPublicationDate}  />
                ))}
              </div>
            </div>
            <hr className="hidden md:block bg-black h-full w-full lg:w-px my-8 lg:my-0 lg:mx-5" />
            <div className="flex flex-col w-full lg:w-1/4">
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold text-base mt-8 md:mt-0">Creators</h4>
                {creators && creators.filter(item => item?.tags[0]?.firstName).slice(randomCreatorIndex, (randomCreatorIndex+2)).map((creator) => (
                  <Creator firstName={creator?.tags[0]?.firstName} lastName={creator?.tags[0]?.lastName} id={creator?.tags[0]?.id} />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold mt-16 text-base">Topics</h4>
                {topics && topics.slice(randomTopicIndex, (randomTopicIndex+3)).map((topic) => (
                  <Topic title={topic?.webTitle} id={topic?.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
