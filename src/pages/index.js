import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import rightChevronIcon from '../assets/images/right-chevron-icon.svg';
import $ from 'jquery';

function Index() {
  $(document).ready(function() {
    let text = 'Dive deeper into topics that matter to you.';

    let spans = '<span>' + text.split('').join('</span><span>') + '</span>';
    $(spans).hide().appendTo('.type-animation').each(function (i) {
      $(this).delay(40 * i).css({
        display: 'inline',
        opacity: 0
      }).animate({
        opacity: 1
      }, 0);
    });
  });

  return (
    <div className='Index h-screen p-5'>
      <div className='flex items-center justify-center gap-x-1 w-full'>
        <img className='h-8' src={logo} alt='myMedium logo' />
        <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
      </div>
      <div className='flex flex-col w-full items-center gap-8 absolute left-1/2 -translate-x-1/2 top-[57%] -translate-y-[57%]'>
        <p className='type-animation font-serif text-6xl md:text-8xl font-extrabold md:w-4/5 text-center'></p>
        <NavLink to='/explore'><button className='bg-brand-green text-white flex items-center justify-center text-xl rounded-md py-5 w-72 tracking-wider hover:opacity-80 duration-200'><p>Get started</p><img className='w-5' src={rightChevronIcon} alt="Right chevron icon" /></button></NavLink>
      </div>
    </div>
  );
}

export default Index;
