import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import rightChevronIcon from '../assets/images/right-chevron-icon.svg';
import $ from 'jquery';

function Index() {
  useEffect(() => {
    let text = 'Dive deeper into topics that matter to you.';
    let letters = '<span>' + text.split('').join('</span><span>') + '</span>';

    $(letters).hide().appendTo('.typing-animation').each(function (i) {
      $(this).delay(40 * i).css({
        display: 'inline',
        opacity: 0
      }).animate({
        opacity: 1
      }, 0);
    });

    setTimeout(() => {
      $('.right-chevron').addClass('slide');
    }, 40 * text.length)
  }, []);

  return (
    <div className='Index h-screen p-5'>
      <div className='flex items-center justify-center gap-x-1 w-full'>
        <img className='h-8' src={logo} alt='myMedium logo' />
        <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
      </div>
      <div className='flex flex-col w-full items-center gap-8 absolute left-1/2 
      -translate-x-1/2 top-[62%] -translate-y-[62%] sm:top-[57%]
      sm:-translate-y-[57%] px-2.5 xs:px-5'>
        <div className='relative'>
          <p className='font-serif opacity-0 text-6xl md:text-8xl font-extrabold md:w-4/5 
          text-center'>Dive deeper into topics that matter to you.</p>
          <p className='typing-animation absolute top-0 left-1/2 -translate-x-1/2 font-serif 
          text-6xl md:text-8xl font-extrabold w-full md:w-4/5 text-center' aria-hidden='true'></p>
        </div>
        <NavLink to='/explore'>
          <button className='bg-brand-green text-white flex 
          items-center justify-center text-xl rounded-md py-5 w-72 tracking-wider 
          hover:opacity-80 duration-200'>
            <p>Get started</p>
            <img className='w-5 right-chevron' src={rightChevronIcon} alt="Right chevron icon" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Index;
