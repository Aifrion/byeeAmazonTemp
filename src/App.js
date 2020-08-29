import React, {useEffect} from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
function App() {

  const[{user}, dispatch] = useStateValue();
  // useEffect <<<<<<< Powerful
  // Piece of code that runs based on a certain condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // USER IS LOGGED IN
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // USER IS LOGGED OUT
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any cleanup operation goes in here
      unsubscribe();
    }
  }, [])
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path ="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path = "/login">
            <Login/>
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

{
  /* React-Router */
}
{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout  */
}
{
  /* localhost.com/login */
}
export default App;
