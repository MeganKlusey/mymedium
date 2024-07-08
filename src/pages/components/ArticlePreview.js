import {NavLink} from 'react-router-dom';

function ArticlePreview(props) {
  const currentArticle = props.data.find(data => data.id === props.id);

  const handleFavouriteToggle = () => {
    const updatedData = props.data.map((item) =>
      item.id === props.id ? { ...item, favourited: !item.favourited } : item
    );
    props.setData(updatedData)
  };

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
            <NavLink to={`/${props.id}`}>
              <h2 className={`font-extrabold sm:line-clamp-2 hover:text-brand-green duration-200 
              ${props.topStory ? 'text-4xl' : 'text-xl'}`}>{ props.title }</h2>
            </NavLink>
          </div>
          <div className='flex items-center gap-2'>
            <p className="font-light"> 
              {props.webPublicationDate.replace(/T/g, ' • ').replace(/Z/g, " ")}
            </p>
            <button className={`${currentArticle.favourited ? 'text-brand-green' : 'text-black'}
            favourite-button flex h-6 items-center text-sm gap-4 hover:text-brand-green duration-200`}
            onClick={handleFavouriteToggle}>
              <ion-icon name="star"></ion-icon>
            </button>
          </div>
          {props.topStory &&
            <p className="line-clamp-4">{props.body.replace(/<\/?[^>]*>/g, "")}</p>
          }
        </div>
        <div className={`hover:opacity-80 duration-200 ${props.topStory ? 'w-full h-60 xs:h-80 md:h-full md:max-h-[45vh] aspect-auto' : 
          'aspect-square lg:aspect-none w-1/3 h-auto' }`}>
          <NavLink to={`/${props.id}`}>
            <img className="object-cover w-full h-full" src={props.thumbnail} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
