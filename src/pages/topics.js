import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";
import Topic from "./components/Topic";

function Topics(props) {
  return (
    <div className="Topics">
      <Navbar data={props.data} setData={props.setData} topics={props.topics} setTopics={props.setTopics} creators={props.creators} setCreators={props.setCreators} />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Topics</h2>
          <BackButton />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {props.topics && props.topics.filter(topic => topic.followed).map((topic) => (
            <div key={topic.id}>
              <Topic key={topic.id} topics={props.topics}
                setTopics={props.setTopics} title={topic.webTitle} id={topic.id} />
            </div>
          ))}
          {props.topics.filter(topic => topic.followed).length === 0 && 
            <p className="text-center font-bold">No topics followed.</p>
          }
        </div>
      </div>
    </div>
  );
}

export default Topics;