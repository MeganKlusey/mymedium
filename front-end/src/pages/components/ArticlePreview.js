import {NavLink} from 'react-router-dom';

function ArticlePreview(props) {
  const currentArticle = props.data.find(data => data.id === props.id);

  const handleFavouriteToggle = () => {
    const updatedData = props.data.map((item) =>
      item.id === props.id ? { ...item, favourited: !item.favourited } : item
    );
    props.setData(updatedData);
    localStorage.setItem('articles-favourited', JSON.stringify(updatedData));
  };

  return (
    <div className="ArticlePreview">
      <div className={`flex gap-2 ${props.topStory ? 'flex-col-reverse justify-end h-auto md:h-screen' 
      : 'flex-row-reverse md:flex-row h-full justify-between'}
      ${props.favourited ? 'flex-row-reverse md:flex-row-reverse w-full border-b pb-4' : props.topStory ? 'border-0' : 'border-b pb-4 md:border-0 md:pb-0'}`}>
        <div className={`article-text flex flex-col 
        ${props.topStory ? 'w-full' : 'w-2/3 justify-between'} ${props.favourited && 'w-full'}`}>
          <div>
            {props.firstName && 
              <p className={`uppercase text-md truncate
                ${!props.topStory && 'hidden xs:block'}`}>Written by <span className="font-bold">{props.firstName}&nbsp;{props.lastName}</span>
              </p>
            }
            <NavLink to={`/${props.id}`}>
              <h2 className={`font-extrabold line-clamp-2 hover:text-brand-green duration-200 
              ${props.topStory ? 'text-4xl' : 'text-xl'} ${props.favourited && 'line-clamp-2'}`}>{ props.title }</h2>
            </NavLink>
          </div>
          <div className={`flex items-center gap-2 ${props.topStory && 'my-2.5'}  ${props.favourited && 'justify-between'}`}>
            <p className="font-light"> 
              {props.webPublicationDate.replace(/T/g, ' • ').replace(/Z/g, " ")}
            </p>
            <button className={`${currentArticle.favourited ? 'text-brand-green hover:opacity-90' : 'text-black'}
            favourite-button flex h-6 items-center gap-4 hover:text-brand-green duration-200
            ${props.favourited ? 'text-3xl sm:text-4xl' : 'text-sm'}`}
            onClick={handleFavouriteToggle}>
              <ion-icon name="star"></ion-icon>
            </button>
          </div>
          {props.topStory &&
            <p className="line-clamp-4">{props.body.replace(/<\/?[^>]*>/g, "")}</p>
          }
        </div>
        <div className={`hover:opacity-80 duration-200 ${props.topStory ? 'w-full h-60 xs:h-80 md:h-full md:max-h-[45vh] aspect-auto' : 
          'aspect-square h-auto' } ${props.favourited ? 'w-44' : 'w-[calc(33.33%_-_0.5rem)]'}`}>
          <NavLink to={`/${props.id}`}>
            <img className="object-cover w-full h-full" src={props.thumbnail} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
