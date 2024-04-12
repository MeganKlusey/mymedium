import logo from '../../assets/images/logo.svg';

function ArticlePreview(props) {
  return (
    <div className="Navbar">
      <div className="flex items-center justify-between h-[10vh] p-5">
        <div className="flex items-center">
          <div className='flex items-center justify-center gap-x-1 w-full'>
            <img className='h-8' src={logo} alt='myMedium logo' />
            <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
          </div>
          <span className="h-full mx-5">|</span>
          <p>Hello</p>
        </div>
        <div className='flex gap-x-4'>
          <a className="text-2xl hover:opacity-60 duration-200" href="/profiles"><ion-icon name="list-outline"></ion-icon></a>
          <a className="text-2xl hover:opacity-60 duration-200" href="/topics"><ion-icon name="people-outline"></ion-icon></a>
          <a className="text-2xl hover:opacity-60 duration-200" href="/"><ion-icon name="log-out-outline"></ion-icon></a>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;