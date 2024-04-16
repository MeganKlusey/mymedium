import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import Topic from "./components/Topic";

function Explore() {
  return (
    <div className="Explore lg:h-screen">
      <div className="lg:h-screen">
        <Navbar />
        <div className="flex md:h-[90vh] lg:overflow-hidden">
          <div className="flex flex-col lg:flex-row p-5">
            <div className="flex flex-col md:flex-row w-full lg:w-3/4 gap-5">
              <div className="w-full md:w-1/2">
                <ArticlePreview topStory />
              </div>
              <div className="grid grid-rows-4 w-full md:w-1/2 h-full justify-stretch md:justify-between gap-5">
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
              </div>
            </div>
            <hr className="bg-black h-full w-px mx-5" />
            <div className="w-full md:w-1/4">
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold text-base">Creators</h4>
                <Creator name="Gabrielle Canon" profile="gabrielle-canon" />
                <Creator name="Kari Paul" profile="kari-paul" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold mt-20 text-base">Topics</h4>
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
