import { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Article(props) {
  const [article, setArticle] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const wildcard = location.pathname.split('/').slice(2).join('/');

  const apiUrl = process.env.NODE_ENV === 'development'
  ? 'http://0.0.0.0:8000'
  : process.env.REACT_APP_API_URL

  useEffect(() => {
    const encodedWildcard = encodeURIComponent(wildcard);

    fetch(`${apiUrl}/article/${id}/${encodedWildcard}`)
    .then(res => res.json())
    .then(data => {
      setArticle(data.response.content);
    })
    .catch(err => console.log(err))
  }, [id, wildcard, apiUrl]);

  const currentArticle = props.data.find(item => item.id === `${id}/${wildcard}`);

  const handleFavouriteToggle = () => {
    const updatedData = props.data.map((item) =>
      item.id === `${id}/${wildcard}` ? { ...item, favourited: !item.favourited } : item
    );
    props.setData(updatedData);
  };

  return (
    <div className="Article">
      <Navbar data={props.data} setData={props.setData} topics={props.topics} setTopics={props.setTopics} creators={props.creators} setCreators={props.setCreators} />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-end">
          <BackButton />
        </div>
        <div className="mt-8 pb-8 w-full md:w-3/4 mx-auto">
          <h2 className="font-bold text-4xl text-center w-full mb-4 inline-block">{article.webTitle}</h2>
          <div className="flex items-center justify-between mt-4 mb-4">
            {article.tags && article.tags[0]?.firstName && 
              <p className="uppercase text-md w-full sm:line-clamp-1">Written by&nbsp; 
                <span className="font-bold">{article.tags[0]?.firstName}&nbsp;{article.tags[0].lastName}</span>
              </p>
            }
            <button className={`${currentArticle?.favourited ? 'text-brand-green hover:opacity-80' : 'text-black'} 
              favourite-button flex h-6 items-center text-2xl hover:text-brand-green duration-200 ml-auto`}
              onClick={handleFavouriteToggle}>
              <ion-icon name="star"></ion-icon>
            </button>
          </div>
          <img className="mx-auto w-full" src={article.fields?.thumbnail} alt="" />
          <p className="mt-8">{article.fields?.body.replace(/<\/?[^>]*>/g, "")}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;