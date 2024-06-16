import { useState, useEffect } from "react";

function Topic(props) {
  const [favouriteTopic, setFavouriteTopic] = useState(() => {
    return JSON.parse(localStorage.getItem("favouriteTopic"));
  });

  useEffect(() => {
    localStorage.setItem("favouriteTopic", JSON.stringify(favouriteTopic));
  }, [favouriteTopic]);

  return (
    <div className="Topic">
      <div className="flex items-center justify-between border-b pb-4 gap-2">
        <h5 className='text-base line-clamp-1'>{props.title}</h5>
        <button className={`${favouriteTopic ? 'bg-brand-green text-white' : 'text-brand-green hover:bg-brand-green hover:text-white'} 
        border border-brand-green py-2 px-6 rounded-md h-fit hover:opacity-80 duration-200`} 
        onClick={() => setFavouriteTopic(!favouriteTopic)}>{favouriteTopic ? "Following" : "Follow"}</button>
      </div>
    </div>
  );
}

export default Topic;