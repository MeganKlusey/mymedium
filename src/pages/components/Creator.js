function Creator(props) {
  return (
    <div className="Creator">
      <div className="flex justify-between">
        <div>
          <a className="block text-black" href={`/profile/${props.profile}`}>{props.name}</a>
          <a className="block text-brand-green" href={`/profile/${props.profile}`}>profile/{props.profile}</a>
        </div>
        <button className="text-brand-green border border-brand-green py-2 px-6 rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Creator;