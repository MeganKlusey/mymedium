import {NavLink} from 'react-router-dom';

function Creator(props) {
  return (
    <div className="Creator">
      <div className="flex items-center justify-between border-b pb-4 gap-2">
        <NavLink to={`/creators/${props.id}`}>
          <h5 className='text-base'>{props.firstName}&nbsp;{props.lastName}</h5>
        </NavLink>
        <button className="text-brand-green border border-brand-green py-2 px-6 
        rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 
        duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Creator;