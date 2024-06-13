import {NavLink} from 'react-router-dom';

function ArticlePreview(props) {
  return (
    <div className="ArticlePreview">
      <div className={`flex gap-2 
      ${props.topStory ? 'flex-col-reverse justify-end h-auto md:h-screen' 
      : 'flex-row-reverse md:flex-row h-full border-b pb-4 md:pb-0 md:border-0'}`}>
        <div className={`article-text flex flex-col 
        ${props.topStory ? 'w-full' : 'w-4/5 justify-between'}`}>
          <div>
          {props.firstName && 
            <p className={`uppercase text-md sm:line-clamp-1 
              ${props.topStory ? '' : 'hidden xs:block'}`}>Written by&nbsp; 
              <span className="font-bold">{props.firstName}&nbsp;{props.lastName}</span>
            </p>
          }
          <NavLink to='/article'>
            <h2 className={`font-extrabold sm:line-clamp-2 
            ${props.topStory ? 'text-4xl' : 'text-xl'}`}>{ props.title }</h2>
          </NavLink>
          </div>
          <p className="font-light"> 
          {props.webPublicationDate.replace(/T/g, ' • ').replace(/Z/g, " ")} <span className="text-xl align-baseline">&#8902;</span></p>
          {props.topStory &&
            <p className="line-clamp-4">{props.body.replace(/<\/?[^>]*>/g, "")}</p>
          }
        </div>
        <img className={`object-cover  
        ${props.topStory ? 'w-full h-60 xs:h-80 md:h-full md:max-h-[45vh] aspect-auto' : 
        'aspect-square lg:aspect-none w-1/3 h-auto' }`} src={props.thumbnail} alt="" />
      </div>
    </div>
  );
}

export default ArticlePreview;
