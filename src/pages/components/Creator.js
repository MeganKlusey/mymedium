import {NavLink} from 'react-router-dom';

function Creator(props) {
  return (
    <div className="Creator">
      <div className="flex items-center justify-between border-b pb-4">
        <NavLink to={`/profiles/${props.profile}`}>{props.name}</NavLink>
        <button className="text-brand-green border border-brand-green py-2 px-6 
        rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 
        duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Creator;