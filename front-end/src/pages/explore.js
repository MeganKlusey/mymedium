import { useMemo } from 'react';
import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import Topic from "./components/Topic";

function Explore(props) {
  let randomCreatorIndex = useMemo(() => {
    return Math.floor(Math.random() * (props.creators.length - 1));
  }, [props.creators.length]);

  let randomTopicIndex = useMemo(() => {
    return Math.floor(Math.random() * (props.topics.length - 2));
  }, [props.topics.length]);

  return (
    <div className="Explore lg:h-screen">
      <div className="lg:h-screen">
        <Navbar data={props.data} setData={props.setData} topics={props.topics} setTopics={props.setTopics} creators={props.creators} setCreators={props.setCreators} />
        <div className="flex h-auto lg:h-[90vh] lg:overflow-hidden relative mt-[10vh] 
        lg:mt-0 relative">
          <div className="flex flex-col lg:flex-row p-2.5 xs:p-5 w-full">
            <div className="flex flex-col md:flex-row w-full lg:w-3/4 gap-8 md:gap-5">
              {!props.dataLoading &&
                <>
                  <div className="w-full md:w-1/2">
                    {props.data && props.data.slice(0,1).map((data) => (
                      <ArticlePreview key={data?.id} topStory data={props.data} setData={props.setData} 
                      title={data?.webTitle} 
                      thumbnail={data?.fields?.thumbnail} body={data?.fields.body} 
                      firstName={data?.tags[0]?.firstName} lastName={data?.tags[0]?.lastName} 
                      webPublicationDate={data?.webPublicationDate} id={data?.id} />
                    ))}
                  </div>
                  <div className="grid grid-rows-4 w-full md:w-1/2 h-full justify-stretch 
                  gap-5 border-t md:border-0 pt-4 md:pt-0">
                    {props.data && props.data.slice(1,5).map((data) => (
                      <ArticlePreview key={data?.id} data={props.data} setData={props.setData} 
                      title={data?.webTitle} 
                      thumbnail={data?.fields.thumbnail} firstName={data?.tags[0]?.firstName} 
                      lastName={data?.tags[0]?.lastName} 
                      webPublicationDate={data?.webPublicationDate} id={data?.id} />
                    ))}
                  </div>
                </>
              }
              {props.dataLoading &&
                <div className="lds-ellipsis text-brand-green"><div></div><div></div><div></div><div></div></div>
              }
            </div>
            <hr className="hidden md:block bg-black h-full w-full lg:w-px my-8 lg:my-0 lg:mx-5" />
            <div className="flex flex-col w-full lg:w-1/4">
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold text-base mt-8 md:mt-0">Creators</h4>
                {!props.creatorsLoading && props.creators && props.creators.slice(randomCreatorIndex, (randomCreatorIndex+2)).map((creator) => (
                  <Creator key={creator.id} firstName={creator.firstName} 
                  lastName={creator.lastName} id={creator.id} creators={props.creators}
                  setCreators={props.setCreators} />
                ))}
                {props.creatorsLoading &&
                  <div className="lds-ellipsis text-brand-green"><div></div><div></div><div></div><div></div></div>
                }
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold mt-16 text-base">Topics</h4>
                {!props.topicsLoading && props.topics && props.topics.slice(randomTopicIndex, (randomTopicIndex+3)).map((topic) => (
                  <Topic key={topic.id} topics={props.topics}
                  setTopics={props.setTopics} title={topic.webTitle} id={topic.id} />
                ))}
                {props.topicsLoading &&
                  <div className="lds-ellipsis text-brand-green"><div></div><div></div><div></div><div></div></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;