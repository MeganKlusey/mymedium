import {NavLink} from 'react-router-dom';

function Topic(props) {
  return (
    <div className="Topic">
      <div className="flex items-center justify-between border-b pb-4">
        <NavLink to={`/topics/${props.topic}`}>
          <h5 className='text-base'>{props.title}</h5>
        </NavLink>
        <button className="text-brand-green border border-brand-green py-2 px-6 
        rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 
        duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Topic;