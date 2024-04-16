function ArticlePreview(props) {
  return (
    <div className="ArticlePreview">
      <div className={`flex gap-2 ${props.topStory ? 'flex-col-reverse' : 'flex-row-reverse md:flex-row h-full'}`}>
        <div className={`article-text ${props.topStory ? 'w-full' : 'w-4/5'}`}>
          <p className="uppercase text-md sm:line-clamp-1">Written by&nbsp; 
            <span className="font-bold">Gabrielle Canon</span>
          </p>
          <h2 className={`font-extrabold sm:line-clamp-2 
          ${props.topStory ? 'text-4xl' : 'text-xl'}`}>Free internet for all not such a 
          bad iea | Brief letters</h2>
          <p className="font-light">2023-12-11 <span className="font-bold">&#8901;</span> 
          16:19:44 <span className="text-xl align-baseline">&#8902;</span></p>
          {props.topStory &&
            <p className="line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat</p>
          }
        </div>
        <div className={`bg-red-200 
        ${props.topStory ? 'w-full h-80 aspect-auto' : 'w-1/3 h-auto' }`}></div>
      </div>
    </div>
  );
}

export default ArticlePreview;
