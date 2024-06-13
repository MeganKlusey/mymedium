function Topic(props) {
  return (
    <div className="Topic">
      <div className="flex items-center justify-between border-b pb-4 gap-2">
        <h5 className='text-base'>{props.title}</h5>
        <button className="text-brand-green border border-brand-green py-2 px-6 
        rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 
        duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Topic;