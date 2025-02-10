import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import $ from 'jquery';

function ArticlePreview(props) {
  $(document).ready(function() {
    $('.mobile-menu-button').on("click", function() {
      showMobileMenu();
    });

    $('.mobile-menu-close-button').on("click", function() {
      hideMobileMenu();
    });

    $('.mobile-menu-item').on("click", function() {
      $('body').removeClass('overflow-hidden')
    });

    $(window).resize(function() {
      if ($(window).width() > 640) {
        hideMobileMenu();
      }
    });

    const showMobileMenu = () => {
      $('.mobile-menu').removeClass('hidden');
      $('.mobile-menu-button').addClass('hidden');
      $('.mobile-menu-close-button').removeClass('hidden');
      $('body').addClass('overflow-hidden');
    };

    const hideMobileMenu = () => {
      $('.mobile-menu').addClass('hidden');
      $('.mobile-menu-close-button').addClass('hidden');
      $('.mobile-menu-button').removeClass('hidden');
      $('body').removeClass('overflow-hidden');
    };

    const resetStates = () => {
      const resetData = props.data.map((item) => {
        return {...item, favourited: false}
      });
      const resetCreators = props.creators.map((creator) => {
        return {...creator, followed: false}
      });
      const resetTopics = props.topics.map((topic) => {
        return {...topic, followed: false}
      });
      props.setData(resetData)
      props.setCreators(resetCreators)
      props.setTopics(resetTopics)
      localStorage.setItem('articles-favourited', JSON.stringify(resetData));
      localStorage.setItem('creators-followed', JSON.stringify(resetCreators));
      localStorage.setItem('topics-followed', JSON.stringify(resetTopics));
    };

    $('.log-out-button').on("click", function() {
      resetStates();
    });

    $('.log-out-button-mobile').on("click", function() {
      resetStates();
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
              <div className='flex items-center justify-center gap-x-0.5 xs:gap-x-1 w-full hover:opacity-80'>
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
              <button className="text-2xl hover:text-brand-green duration-200">
                <ion-icon name="star-outline"></ion-icon>
              </button>
            </NavLink>
            <NavLink to="/creators">
              <button className="text-2xl hover:text-brand-green duration-200">
                <ion-icon name="people-outline"></ion-icon>
              </button>
            </NavLink>
            <NavLink to="/topics">
              <button className="text-2xl hover:text-brand-green duration-200">
                <ion-icon name="list-outline"></ion-icon>
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="log-out-button text-2xl hover:text-brand-green duration-200">
                <ion-icon name="log-out-outline"></ion-icon>
              </button>
            </NavLink>
          </div>
        </div>
        <div className='mobile-menu bg-white w-full h-[90vh] fixed z-10 top-[10vh] hidden'>
          <hr className="w-full my-2.5 xs:my-5" />
          <div className='flex flex-col px-2.5 px-5'>
            <NavLink to="/favourites">
              <button className='mobile-menu-item pb-4 border-b hover:text-brand-green w-full text-left'>Favourites</button>
            </NavLink>
            <NavLink to="/creators">
              <button className='mobile-menu-item py-4 border-b hover:text-brand-green w-full text-left'>Creators</button>
            </NavLink>
            <NavLink to="/topics">
              <button className='mobile-menu-item py-4 border-b hover:text-brand-green w-full text-left'>Topics</button>
            </NavLink>
            <NavLink to="/">
              <button className='log-out-button-mobile mobile-menu-item py-4 border-b hover:text-brand-green w-full text-right'>Logout</button>
            </NavLink>
          </div>
        </div>
    </div>
  );
}

export default ArticlePreview;