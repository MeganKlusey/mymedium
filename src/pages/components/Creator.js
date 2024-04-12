function Creator(props) {
  return (
    <div className="Creator">
      <div className="flex items-center justify-between border-b pb-4">
        <a className="block text-black" href={`/profiles/${props.profile}`}>{props.name}</a>
        <button className="text-brand-green border border-brand-green py-2 px-6 rounded-md h-fit hover:text-white hover:bg-brand-green hover:opacity-80 duration-200">Follow</button>
      </div>
    </div>
  );
}

export default Creator;