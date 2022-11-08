
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import login from "../../assets/login.svg"
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import { getJwtToken } from '../../utils/utils';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle("LOGIN")
    const {signInWithGoogle,signIn}=useContext(AuthContext);
    const location=useLocation();
    const nav=useNavigate();
    const from =location.state?.from?.pathname || "/"
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target
        const email=form.email.value;    
        const password=form.password.value;
       console.log(email,password)
       signIn(email,password).then(result=>{
        const user=result.user;
        console.log(user);
        getJwtToken(user);
        nav(from,{replace:true})
        toast.success(`${email} SIGNED IN SUCCESSFULLY`)}).catch(error=>console.log(error))
        
       }
       const handleGoogleSignIn=()=>{
        signInWithGoogle().then(result=>{
        const user=result.user;
        console.log(user)
        getJwtToken(user)
        nav(from,{replace:true})
        })

       }


    return (
        <section className="text-gray-400 bg-gray-900 body-font">
          
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <img src={login} alt=""/>
      
    </div>
    <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-white text-lg font-medium title-font mb-5">LOGIN</h2>      
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-400">EMAIL</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-400">PASSWORD</label>
        <input type="password"  name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">LOGIN</button>
       <p className='my-2'>DON'T HAVE AN ACCOUNT ? <Link className='text-white' to="/register">REGISTER</Link></p>
       <hr></hr><p className='text-3xl text-center my-3'>OR</p>
        <div onClick={handleGoogleSignIn} className='flex  items-center cursor-pointer hover:bg-slate-900 p-4 rounded-2xl'><img className='w-8' src='https://freesvg.org/img/1534129544.png' alt=""/><p className='ml-2 font-bold text-white'>LOGIN WITH GOOGLE</p></div>
    </form>
       
  </div>
</section>
    );
};

export default Login;