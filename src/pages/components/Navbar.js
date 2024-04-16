import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function ArticlePreview(props) {
  return (
    <div className="Navbar">
      <div className="flex items-center justify-between h-[10vh] p-2.5 xs:p-5">
        <div className="flex items-center">
          <NavLink to="/explore">
            <div className='flex items-center justify-center gap-x-0.5 sm:gap-x-1 w-full'>
              <img className='h-4 xs:h-8' src={logo} alt='myMedium logo' />
              <h1 className='font-serif font-bold text-2xl xs:text-4xl'>myMedium</h1>
            </div>
          </NavLink>
          <span className="hidden md:block h-full mx-5">|</span>
          <p className="hidden md:block">Hello</p>
        </div>
        <button className='flex sm:hidden text-2xl hover:text-brand-green duration-200'>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <div className='hidden sm:flex gap-x-4'>
          <NavLink to="/favourites">
            <div className="text-2xl hover:text-brand-green duration-200">
              <ion-icon name="star-outline"></ion-icon>
            </div>
          </NavLink>
          <NavLink to="/profiles">
            <div className="text-2xl hover:text-brand-green duration-200">
              <ion-icon name="list-outline"></ion-icon>
            </div>
          </NavLink>
          <NavLink to="/topics">
            <div className="text-2xl hover:text-brand-green duration-200">
              <ion-icon name="people-outline"></ion-icon>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="text-2xl hover:text-brand-green duration-200">
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;