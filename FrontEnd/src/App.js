
import './App.css';
import Registration from './Users/Registration';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Login from './Users/Login';
import UserHome from './Users/UserHome'
import AdminLogin from './Admin/AdminLogin';
import HomePage from './HomePage';
import RetailLogin from './Retailer/RetailLogin';
import RetailHome from './Retailer/RetailHome';
import AdminHome from './Admin/AdminHome';
import Product from './Users/Product';
import Cart from './Users/Cart';
import Forgotpassword from './Users/Forgotpassword';
import Wishlist from './Users/Wishlist';
import Error from './Error';
import PrivateRoute from './PrivateRoute'
import Payment from './Users/Payment';
import OrderDetails from './Users/OrderDetails';


function App() {
  const userislogged=window.localStorage.getItem("loggedin")
  const retailerislogged=window.localStorage.getItem("retailerloggedin")
  const adminislogged=window.localStorage.getItem("adminloggedin")
  return (

    <Router>
    <div className="App">
     
      <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route element={<PrivateRoute/>}>
      <Route exact path='/AdminLogin' element={<AdminLogin/>}></Route>
      <Route exact path='/RetailerLogin' element={<RetailLogin/>}></Route>
    <Route exact path='/Registration' element={<Registration />}></Route>
    <Route exact path='/userlogin' element={<Login/>}></Route>
    <Route exact path="/payment/:uid" element={<Payment/>}></Route>
    <Route exact path='/home/:uid' element={userislogged==="true"?<UserHome/>:<Login/>}></Route>
  
   
    <Route exact path='/Retailer/:rid' element={retailerislogged==="true"?<RetailHome/>:<RetailLogin/>}></Route>
    <Route exact path='/Admin/:aid' element={adminislogged==="true"?<AdminHome/>:<AdminLogin/>}></Route>
   <Route exact path="/:uid/:pid" element={<Product/>}></Route>
   <Route exact path="/cart/:uid" element={<Cart/>}></Route>
   <Route exact path="/forgotpassword" element={<Forgotpassword/>}></Route>
   <Route exact path="/wishlist/:uid" element={<Wishlist/>}></Route>
   <Route exact path="/orderdetails/:uid" element={<OrderDetails/>}></Route>
 
   </Route>
 <Route exact path='*' element={<Error/>}></Route>
 
      </Routes>

    </div>
    </Router>
  );
}

export default App;
