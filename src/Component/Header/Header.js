import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';

const Header = () => {
    const {user,logOut} =useContext(AuthContext)
    const handleLogOut=()=>{
      logOut().then(()=>{
        toast.success(`${user.name} SIGNED OUT SUCCESSFULLY`)
      })
    }
    return (
  <header className="text-gray-400 bg-gray-900 body-font">
     
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white">HOME</Link>
      <Link to="/register" className="mr-5 hover:text-white">REGISTER</Link>
       
      <Link to="/add-a-service" className="mr-5 hover:text-white">ADD A SERVICE</Link>
      <Link to="/my-reviews" className="mr-5 hover:text-white">MY REVIEWS</Link>
      {
        user?.email ?   <button onClick={handleLogOut} className='mr-5 bg-slate-900 p-2 rounded-xl hover:bg-slate-700' to="">LOGOUT</button>   
                   :
                      <Link to="/login" className="mr-5 hover:text-white">LOGIN</Link>
                    
       }
    </nav>
    <img className='w-12 h-12 rounded-3xl' src={user?.photoURL}alt=""/>
    
  </div>
   <hr/>
</header>
    );
};

export default Header;