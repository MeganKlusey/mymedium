import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import $ from 'jquery';

function ArticlePreview(props) {
  $(document).ready(function() {
    $('.mobile-menu-button').on("click", function() {
      $('.mobile-menu').removeClass('hidden');
      $('.mobile-menu-button').addClass('hidden');
      $('.mobile-menu-close-button').removeClass('hidden');
      $('body').addClass('overflow-hidden');
    });

    $('.mobile-menu-close-button').on("click", function() {
      $('.mobile-menu').addClass('hidden');
      $('.mobile-menu-close-button').addClass('hidden');
      $('.mobile-menu-button').removeClass('hidden');
      $('body').removeClass('overflow-hidden');
    });

    let date = new Date($.now());
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours <= 11 && minutes <= 59) {
      $('.greeting').text('Good morning');
    } else {
      $('.greeting').text('Good afternoon');
    }
  });

  return (
    <div className="Navbar">
        <div className="bg-white flex items-center justify-between w-full
        h-[10vh] p-2.5 xs:p-5 fixed lg:relative top-0 z-20">
          <div className="flex items-center">
            <NavLink to="/explore">
              <div className='flex items-center justify-center gap-x-0.5 xs:gap-x-1 w-full'>
                <img className='h-4 xs:h-8' src={logo} alt='myMedium logo' />
                <h1 className='font-serif font-bold text-2xl xs:text-4xl'>myMedium</h1>
              </div>
            </NavLink>
            <span className="hidden md:block h-full mx-5">|</span>
            <p className="hidden md:block greeting"></p>
          </div>
          <button className='mobile-menu-button flex sm:hidden text-2xl hover:text-brand-green duration-200'>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button className='mobile-menu-close-button flex sm:hidden text-2xl hover:text-brand-green duration-200 hidden'>
            <ion-icon name="close-outline"></ion-icon>
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
        <div className='mobile-menu bg-white w-full h-[90vh] fixed z-10 top-[10vh] hidden'>
          <hr className="w-full my-2.5 xs:my-5" />
          <div className='px-2.5 px-5'>
            <NavLink to="/favourites">
              <p className='pb-4 border-b hover:text-brand-green'>Favourites</p>
            </NavLink>
            <NavLink to="/topics">
              <p className='py-4 border-b hover:text-brand-green'>Topics</p>
            </NavLink>
            <NavLink to="/profiles">
              <p className='py-4 border-b hover:text-brand-green'>Creators</p>
            </NavLink>
            <NavLink to="/">
              <p className='py-4 border-b hover:text-brand-green text-right'>Logout</p>
            </NavLink>
          </div>
        </div>
    </div>
  );
}

export default ArticlePreview;