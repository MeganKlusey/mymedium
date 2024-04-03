import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";

function Explore() {
  return (
    <div className="Explore h-screen">
      <div className="h-screen">
        <Navbar />
        <div className="flex h-fit">
          <div className="flex p-5">
            <div className="flex w-3/4 gap-5">
              <div className="w-1/2">
                <ArticlePreview topStory />
              </div>
              <div className="flex flex-col w-1/2 h-full justify-between gap-5">
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
              </div>
            </div>
            <hr className="bg-black h-full w-px mx-5" />
            <div className="w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
