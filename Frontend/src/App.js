// import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from "./components/cart/Cart"; 
import Delivery from './components/cart/Delivery';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import store from "./store";
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import ConfirmOrder from './components/cart/ConfirmOrder';


function App() {
 
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);
  
     
    return ( 
    <Router><div className="App">
    <Header/>
    <div className="container container-fluid">
    <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/eats/stores/:id/menus" 
    element={<Menu/>} 
    exact/>
    <Route path="/cart" element={<Cart/>} exact />
    <Route path="/delivery" element={<Delivery/>} exact />

    {/* user */}
    <Route path="/users/login" element={<Login/>} />
    <Route path="/users/signup" element={<Register/>} />
    <Route path="/users/me" element={<Profile/>}/>
    <Route path="/users/me/update" element={<UpdateProfile/>} exact />
    <Route path="/users/forgetPassword" element={<ForgotPassword/>} exact />
    <Route path="/users/resetPassword/:token" 
    element={<NewPassword/>} exact />
    <Route path="/confirm" element={<ConfirmOrder/>}/>
    
    </Routes>

    

    </div>
    <Footer/>
      
    </div>
    </Router>
    );

  }

export default App;
