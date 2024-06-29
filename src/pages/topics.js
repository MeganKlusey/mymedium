import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Topics(props) {
  return (
    <div className="Topics">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Topics</h2>
          <BackButton />
        </div>
        <div>
          {props.topics && props.topics.filter(topic => topic?.favourited).map((topic) => (
            <div key={topic?.id}>
              {topic?.webTitle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics;