import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";
import ArticlePreview from "./components/ArticlePreview";

function Favourites(props) {
  return (
    <div className="Favourites">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Favourites</h2>
          <BackButton />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {props.data && props.data.filter(data => data.favourited).map((data) => (
            <div key={data.id}>
              <ArticlePreview key={data?.id} data={props?.data} setData={props?.setData} 
                title={data?.webTitle} 
                thumbnail={data?.fields?.thumbnail} firstName={data?.tags[0]?.firstName} 
                lastName={data?.tags[0]?.lastName} 
                webPublicationDate={data?.webPublicationDate} id={data?.id} favourited  />
            </div>
          ))}
          {props.data.filter(topic => topic.favourited).length === 0 && 
            <p className="text-center font-bold">No articles favourited.</p>
          }
        </div>
      </div>
    </div>
  );
}

export default Favourites;