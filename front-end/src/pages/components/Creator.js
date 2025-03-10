function Creator(props) {
  const currentCreator = props.creators.find(creator => creator.id === props.id);

  const handleFollowToggle = () => {
    const updatedCreators = props.creators.map(creator =>
      creator.id === props.id ? { ...creator, followed: !creator.followed } : creator
    );
    props.setCreators(updatedCreators);
    localStorage.setItem('creators-followed', JSON.stringify(updatedCreators));
  };

  return (
    <div className="Creator">
      <div className="flex items-center justify-between border-b pb-4 gap-2">
        <h5 className='text-base line-clamp-1'>{props.firstName} {props.lastName}</h5>
        <button className={`${currentCreator.followed ? 'bg-brand-green text-white' : 'text-brand-green hover:bg-brand-green hover:text-white'}
        border border-brand-green py-2 px-6 rounded-md h-fit hover:opacity-80 duration-200`}
        onClick={handleFollowToggle}>
          {currentCreator.followed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default Creator;