function Topic(props) {
  const currentTopic = props.topics.find(topic => topic.id === props.id);

  const handleFavouriteToggle = () => {
    const updatedTopics = props.topics.map((topic) =>
      topic.id === props.id ? { ...topic, favourited: !topic.favourited } : topic
    );
    props.setTopics(updatedTopics)
    localStorage.setItem('topics', JSON.stringify(updatedTopics));
  };

  return (
    <div className="Topic">
      <div className="flex items-center justify-between border-b pb-4 gap-2">
        <h5 className='text-base line-clamp-1'>{props.title}</h5>
        <button className={`${currentTopic?.favourited ? 'bg-brand-green text-white' : 'text-brand-green hover:bg-brand-green hover:text-white'}
        border border-brand-green py-2 px-6 rounded-md h-fit hover:opacity-80 duration-200`}
        onClick={handleFavouriteToggle}>
          {currentTopic?.favourited ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default Topic;