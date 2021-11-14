import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../Context/UseAuth';
import Payment from '../Home/Home/payment/Payment';
import AddminRoute from '../Login/AdminRoute/AddminRoute';
import ManageALLProduct from '../ManageAllProduct/ManageALLProduct';
import ManageOrder from '../Orders/ManageOrder';
import Myorder from '../Orders/Myorder/Myorder';
import AddReview from '../Reviews/Addreviews/AddReview';
import AddAdmin from './AddAdmin/AddAdmin';
import Addproduct from './Addproduct/Addproduct';

const Dahbord = () => {
    let { path, url } = useRouteMatch();

    const { admin, logOUT } = UseAuth()


    return (
        <div>


            <div className="grid grid-rows-2 grid-flow-col gap-2">
                <div className="row-span-3 bg-gray-400 ...">
                    <h2 className='text-center font-bold text2xl md:text-4xl p-5 background' >Dashbord</h2>

                    <ul>
                        {admin ?

                            <ul>
                                <Link to={`${url}/addAdmin`}>
                                    <li className='text-center font-bold my-4'>Add Admin</li>
                                </Link>


                                <Link to={`${url}/AddProduct`}>
                                    <li className='text-center font-bold my-4'>Add Product</li>
                                </Link>

                                <Link to={`${url}/manageOrder`}>
                                    <li className='text-center font-bold my-4'>Manage All Orders</li>
                                </Link>

                                <Link to={`${url}/manageAllproduct`}>
                                    <li className='text-center font-bold my-4'>Manage All Product</li>
                                </Link>

                                <button onClick={logOUT} className=' px-2 py-1 block my-3 mx-auto rounded-lg button font-bold shadow'>log out</button>
                            </ul>

                            :

                            <ul>
                                <Link to={`${url}`}>
                                    <li className='text-center font-bold my-4'>My Order</li>
                                </Link>

                                <Link to={`${url}/paymant`}>
                                    <li className='text-center font-bold my-4'>pay</li>
                                </Link>
                                <Link to={`${url}/addReviews`}>
                                    <li className='text-center font-bold my-4'>Add Reviews</li>

                                </Link>


                                <Link to={`${url}/myorders`}>
                                    <li className='text-center font-bold my-4'>MyOrders</li>
                                </Link>


                                <button onClick={logOUT} className=' px-2 py-1 block my-3 mx-auto rounded-lg button font-bold shadow'>log out</button>

                            </ul>
                        }

                    </ul>


                </div>
                <div className="col-span-2 ow-span-2 bg-gray-400...">

                    <Switch>
                        <Route exact path={path}>
                            <Myorder></Myorder>
                        </Route>

                        <Route path={`${path}/paymant`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/addReviews`}>
                            <AddReview></AddReview>
                        </Route>

                        <AddminRoute path={`${path}/addAdmin`}>
                            <AddAdmin></AddAdmin>
                        </AddminRoute>
                        <AddminRoute path={`${path}/AddProduct`}>
                            <Addproduct></Addproduct>
                        </AddminRoute>
                        <AddminRoute path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </AddminRoute>
                        <Route path={`${path}/myorders`}>
                            <Myorder></Myorder>
                        </Route>

                        <AddminRoute path={`${path}/manageAllproduct`}>
                            <ManageALLProduct></ManageALLProduct>
                        </AddminRoute>
                    </Switch>


                </div>
                {/* <div class="row-span-2 col-span-2 ...">3</div> */}
            </div>

        </div>
    );
};

export default Dahbord;