import ArticlePreview from "./components/ArticlePreview";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import Topic from "./components/Topic";

function Explore() {
  return (
    <div className="Explore lg:h-screen">
      <div className="lg:h-screen">
        <Navbar />
        <div className="flex h-auto lg:h-[90vh] lg:overflow-hidden relative mt-[10vh] lg:mt-0 relative">
          <div className="flex flex-col lg:flex-row p-2.5 xs:p-5">
            <div className="flex flex-col md:flex-row w-full lg:w-3/4 gap-8 md:gap-5">
              <div className="w-full md:w-1/2">
                <ArticlePreview topStory />
              </div>
              <div className="grid grid-rows-4 w-full md:w-1/2 h-full justify-stretch md:justify-between gap-5 border-t md:border-0 pt-4 md:pt-0">
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
              </div>
            </div>
            <hr className="hidden md:block bg-black h-full w-full lg:w-px my-8 lg:my-0 lg:mx-5" />
            <div className="w-full lg:w-1/4">
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold text-base mt-8 md:mt-0">Creators</h4>
                <Creator name="Gabrielle Canon" profile="gabrielle-canon" />
                <Creator name="Kari Paul" profile="kari-paul" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="uppercase font-bold mt-16 lg:mt-20 text-base">Topics</h4>
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
