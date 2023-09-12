import logo from '../img/logo.png'
import "../css/header.css"


import Nav from "./HeaderNav";

export const Header = () => {
  return (
    <header className='bg-white'>
        <div className=" text-zinc-500 flex w-full flex-wrap items-center justify-between text-lg font-bold">
    
      <div className='my-3 mx-14'>
           <a href="/"> <img src={logo} alt=""/></a>
        </div>
      <Nav />
    </div>
    </header>
  );
}; 

export default Header;
    
   