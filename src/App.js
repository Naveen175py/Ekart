import './App.css';
import Header from './Header'
import Home from './Home';
import React, { useEffect}  from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment.js'
import {auth} from "./firebase";
import "./Payment.css"

import {useStateValue} from "./StateProvider"
import {loadStripe} from "@stripe/stripe-js"; 
import {Elements} from "@stripe/react-stripe-js";

const promise=loadStripe(
  'pk_test_51LLLdfSBghnNiDkHWV60ii9wVftTBkE77jrWX5MDA1DtTT9ujeyz0Bp9yoBa4IjtkrOjD1a9Vi8yyZ1ecW1nQNuF00yU6pLPZa'
  
);
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    //will only run once when th app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is >>>",authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      
      }
    })
  }, [])
  
  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/login">
           
          <Login/>
        </Route>
      
        <Route path="/checkout">
        <Header/>  
          
          <Checkout/>
          
        </Route>
        <Route path="/payment">
        <Header/>  
          <Elements stripe={promise}>
              <Payment/>
          </Elements>
      
        </Route>

        <Route path="/">
        <Header/>    
           <Home/>
        </Route>
      </Switch>
    </div>
  </Router>
    
    
  );
}

export default App;
