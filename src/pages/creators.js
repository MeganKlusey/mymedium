import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Creators() {
  return (
    <div className="Creators">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mt-4">Creators</h2>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default Creators;