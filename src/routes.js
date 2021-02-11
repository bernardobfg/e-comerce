import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
  
import Products_List from './pages/Products_List/index'
import Cart from './pages/Cart/index'
import Login from './pages/Login/index'


  export default function Routes() {
      return (
          <BrowserRouter>
            <Switch>
                  <Route exact path="/">
                        <Products_List/>
                  </Route>

                  <Route path="/carrinho">
                        <Cart/>
                  </Route>

                  <Route path="/login">
                        <Login/>
                  </Route>
              </Switch>
              
          </BrowserRouter>
      )
  }