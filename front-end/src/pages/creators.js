import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";
import Creator from "./components/Creator";

function Creators(props) {
  return (
    <div className="Creators">
      <Navbar data={props.data} setData={props.setData} topics={props.topics} setTopics={props.setTopics} creators={props.creators} setCreators={props.setCreators} />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Creators</h2>
          <BackButton />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {!props.creatorsLoading && props.creators && props.creators.filter(creator => creator.followed).map((creator) => (
            <div key={creator.id}>
              <Creator key={creator.id} firstName={creator.firstName} 
                lastName={creator.lastName} id={creator.id} creators={props.creators}
                setCreators={props.setCreators} />
            </div>
          ))}
          {!props.creatorsLoading && props.creators.filter(creator => creator.followed).length === 0 && 
            <p className="text-center font-bold">No creators followed.</p>
          }
          {props.creatorsLoading &&
            <div className="lds-ellipsis text-brand-green"><div></div><div></div><div></div><div></div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default Creators;