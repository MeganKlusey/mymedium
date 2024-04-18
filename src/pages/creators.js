import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Creators() {
  return (
    <div className="Creators">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <BackButton />
      </div>
    </div>
  );
}

export default Creators;