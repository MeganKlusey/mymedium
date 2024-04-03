import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import Topic from "./components/Topic";

function Explore() {
  return (
    <div className="Explore h-screen">
      <div className="h-screen">
        <Navbar />
        <div className="flex h-[90vh] overflow-hidden">
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
            <div className="w-1/4">
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold">Creators</h3>
                <Creator name="Gabrielle Canon" profile="gabrielle-canon" />
                <Creator name="Kari Paul" profile="kari-paul" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold mt-20">Topics</h3>
                <Topic title="Social Media" topic="social-media" />
                <Topic title="Coronavirus" topic="coronavirus" />
                <Topic title="Robots" topic="robots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
