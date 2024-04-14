import logo from '../../assets/images/logo.svg';

function ArticlePreview(props) {
  return (
    <div className="Navbar">
      <div className="flex items-center justify-between h-[10vh] p-5">
        <div className="flex items-center">
          <a className='flex items-center justify-center gap-x-1 w-full' href="/explore">
            <img className='h-8' src={logo} alt='myMedium logo' />
            <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
          </a>
          <span className="hidden md:block h-full mx-5">|</span>
          <p className="hidden md:block">Hello</p>
        </div>
        <div className='flex gap-x-4'>
        <a className="text-2xl hover:text-brand-green duration-200" href="/favourites"><ion-icon name="star-outline"></ion-icon></a>
          <a className="text-2xl hover:text-brand-green duration-200" href="/profiles"><ion-icon name="list-outline"></ion-icon></a>
          <a className="text-2xl hover:text-brand-green duration-200" href="/topics"><ion-icon name="people-outline"></ion-icon></a>
          <a className="text-2xl hover:text-brand-green duration-200" href="/"><ion-icon name="log-out-outline"></ion-icon></a>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;