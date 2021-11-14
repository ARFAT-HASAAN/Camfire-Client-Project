import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Explore from './Pages/Shared/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Regester from './Pages/Login/Regester/Regester';
import AuthProvider from './Pages/Context/AuthProvider';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Home/Footer/Footer';
import Addproduct from './Pages/Dashbord/Addproduct/Addproduct';
import AddReview from './Pages/Reviews/Addreviews/AddReview';
import Purchace from './Pages/purchase/Purchace';
import Payment from './Pages/Home/Home/payment/Payment';
import ManageOrder from './Pages/Orders/ManageOrder';
import Myorder from './Pages/Orders/Myorder/Myorder';
import ManageEvryproduct from './Pages/ManageAllProduct/ManageEvryproduct';
import ManageALLProduct from './Pages/ManageAllProduct/ManageALLProduct';
import Dahbord from './Pages/Dashbord/Dahbord';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/explore'>
            <Explore></Explore>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/products/:id'>
            <Purchace></Purchace>
          </PrivateRoute>
          <Route path='/regester'>
            <Regester></Regester>
          </Route>

          {/* <Route path='/addproduct'>
            <Addproduct></Addproduct>
          </Route> */}

          <Route path='/dashbord'>
            <Dahbord></Dahbord>
          </Route>
          {/* <Route path='/addReviews'>
            <AddReview></AddReview>
          </Route> */}

          {/* <Route path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </Route> */}

          {/* <Route path='/myorders'>
            <Myorder></Myorder>
          </Route> */}

          {/* <Route path='/manageAllproduct'>
            <ManageALLProduct></ManageALLProduct>
          </Route> */}

          {/* <Route path='/paymant'>
            <Payment></Payment>
          </Route> */}

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;

//  button color #00E0C2
// #385A64