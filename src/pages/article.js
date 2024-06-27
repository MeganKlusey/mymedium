import { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";

function Article() {
  const [article, setArticle] = useState([]);
  const [loading, isLoading] = useState(true);

  const { id } = useParams();
  const location = useLocation();
  const wildcard = location.pathname.split('/').slice(2).join('/');

  useEffect(() => {
    fetch(`https://content.guardianapis.com/${id}/${wildcard}?show-fields=thumbnail,body&show-tags=contributor&api-key=4b5d97c0-1079-4e16-af07-1e8ec88f1918`)
    .then(res => res.json())
    .then(data => {
      setArticle(data.response.content);
      isLoading(false);
    })
    .catch(err => console.log(err))
  }, []);

  if (isLoading) {
    <div>Loading...</div>
  }

  return (
    <div className="Article">
      <Navbar />
      <div className="mt-[10vh] lg:mt-0 p-2.5 xs:p-5">
        <div className="flex items-center justify-end">
          <BackButton />
        </div>
        <div className="mt-8 pb-8 w-full md:w-3/4 mx-auto">
          <h2 className="font-bold text-4xl text-center w-full mb-4 inline-block">{article?.webTitle}</h2>
          {article?.tags && 
            <p className="uppercase text-md w-full sm:line-clamp-1 mt-4 mb-4">Written by&nbsp; 
              <span className="font-bold">{article?.tags[0]?.firstName}&nbsp;{article?.tags[0]?.lastName}</span>
            </p>
          }
          <img className="mx-auto w-full" src={article?.fields?.thumbnail} alt="" />
          <p className="mt-8">{article?.fields?.body.replace(/<\/?[^>]*>/g, "")}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;