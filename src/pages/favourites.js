import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Favourites() {
  return (
    <div className="Favourites">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Favourites</h2>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default Favourites;