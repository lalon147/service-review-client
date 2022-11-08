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
  <div className='w-14 h-14 rounded-full bg-slate-300 flex items-center justify-center mr-2'>
            <h1 className='text-black font-bold text-4xl  '>RC</h1>
          </div>
    <h1 className='text-3xl font-bold text-white'>RISAN's  CEREMONY</h1>    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white">HOME</Link>
      
       
      
      {
        user?.email ?   <>
                       <Link to="/add-a-service" className="mr-5 hover:text-white">ADD A SERVICE</Link>
                       <Link to="/my-reviews" className="mr-5 hover:text-white">MY REVIEWS</Link>
                       <button onClick={handleLogOut} className='mr-5 bg-slate-900 p-2 rounded-xl hover:bg-slate-700' to="">LOGOUT</button>
                        </>
                   :
                      <>
                      <Link to="/login" className="mr-5 hover:text-white">LOGIN</Link>
                      <Link to="/register" className="mr-5 hover:text-white">REGISTER</Link>
                      </>
                    
       }
    </nav>
    
    <img title={`${user? user.email : "USER NOT LOGGED IN"}`} className='w-12 h-12 rounded-3xl bg-white' src={user?.photoURL ? user.photoURL  : "https://static.thenounproject.com/png/4808974-200.png"} alt=""/>
    
    
  </div>
   <hr/>
</header>
    );
};

export default Header;