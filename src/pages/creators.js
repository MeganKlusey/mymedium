import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";
import Creator from "./components/Creator";

function Creators(props) {
  return (
    <div className="Creators">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Creators</h2>
          <BackButton />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {props.data && props.data.filter(creator => creator?.followed).map((creator) => (
            <div key={creator?.tags[0].id}>
              <Creator key={creator?.id} firstName={creator?.tags[0]?.firstName} 
                lastName={creator?.tags[0]?.lastName} id={creator?.tags[0]?.id}
                data={props.data} setData={props.setData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creators;