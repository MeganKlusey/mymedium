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
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Article</h2>
          <BackButton />
        </div>
        {article?.webTitle}
        {article.fields?.body}
      </div>
    </div>
  );
}

export default Article;