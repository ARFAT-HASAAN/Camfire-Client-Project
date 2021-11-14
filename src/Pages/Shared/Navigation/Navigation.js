import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Context/UseAuth';

const Navigation = () => {

    // const user = { email: "mdhasankn20@gamil.com", }
    // const logout = () => {

    // }
    const { user, logOUT } = UseAuth()

    return (


        <>
            {/* navbar start form here */}
            <div className='bg text '>


                <div className='max-w-7xl mx-auto text-white flex  justify-between py-4 px-16 items-center '>

                    {/* nabar logo  */}
                    <div className='flex items-center'>
                        <div className="logo">

                            <span className='font-bold text-2xl flex text'>CamPremire</span>

                        </div>

                        {/* primary nav  */}
                        <div className="primary-nav mx-4 items-center flex align-center hidden md:flex text">
                            <Link className='mr-6 font-bold' to='/home'>Home</Link>
                            <Link className='mr-6 font-bold' to='/explore'>Explore</Link>
                            <HashLink className='mr-6 font-bold' smooth to="/home#products">Products</HashLink>
                            {user.email &&
                                <Link className='m-6  block font-bold' to='/dashbord'>Dashbord</Link>}

                            <HashLink className='mr-6 font-bold' smooth to="/home#Contact">Contact</HashLink>
                            <HashLink className='mr-6 font-bold' smooth to="/home#Aboute">Aboute</HashLink>
                        </div>
                    </div>


                    {/* secondary nav */}
                    <div className="secondary-nav hidden md:flex  ">

                        {/* onClick={logout} */}

                        {user.email ? <button onClick={logOUT} className=' px-2 py-1 rounded-lg button font-bold mx-2  shadow'>log out</button>
                            :

                            <Link to='/login'> <button className=' px-2 py-1 rounded-lg button mx-2 font-bold'>Login</button>  </Link>
                        }

                    </div>

                    {/* mobaile manu  toggle */}

                    <div className='flex md:hidden' >
                        {/* togle btn  */}
                        <button onClick={() => {
                            const manu = document.getElementById('mobile_manu')
                            manu.classList.toggle('hidden')
                        }}
                            id='mobile_manu_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" smooth class="h-6 w-6 text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>

                </div>

                <div id='mobile_manu' className='hidden text-center'>

                    <div className="primary-nav mx-4 items-center text block md:hidden">

                        <Link className='m-6 font-bold block' to='/home'>Home</Link>
                        <Link className='m-6 font-bold block' to='/explore'>Explore</Link>
                        <HashLink className='m-6 font-bold block' smooth to="/home#products">Products</HashLink>
                        {user.email &&
                            <Link className='m-6  block font-bold block' to='/dashbord'>Dashbord</Link>}

                        <HashLink className='m-6 font-bold block' smooth to="/home#Contact">Contact</HashLink>
                        <HashLink className='m-6 font-bold block' smooth to="/home#Aboute">Aboute</HashLink>

                        {/* <Link className='m-6  block font-bold' to='/home'>Home</Link>
                        <HashLink className='m-6 font-bold' smooth to="/home#packages">Packages</HashLink>

                        <Link className='m-6  block font-bold' to='/AddService'>Add Service</Link>


                        <Link className='m-6  block font-bold' to='/Orders'>Orders</Link>

                        <HashLink className='m-6  block font-bold' smooth to="/home#Contact">Contact</HashLink>

                        <HashLink className='m-6  block font-bold' smooth to="/home#Aboute">About</HashLink> */}



                    </div>

                    <div className="secondary-nav block md:hidden ">

                        {user.email ? <button onClick={logOUT} className=' px-2 py-1 rounded-lg button font-bold mx-2  shadow'>log out</button>
                            :

                            <Link to='/login'> <button className=' px-2 py-1 rounded-lg button mx-2 font-bold'>Login</button>  </Link>
                        }

                        {/*                         
                        <button onClick={logOUT} className=' px-2 py-1 rounded-lg bg-green-400 button font-bold mx-2  shadow'>log out</button>


                        <Link to='/login'> <button className=' px-2 py-1 rounded-lg bg-pink-500 mx-2  button font-bold'>Login</button>  </Link> */}





                    </div>



                </div>


            </div>
        </>
    );
};

export default Navigation;