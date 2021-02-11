import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
  
import Products_List from './pages/Products_List/index'
import Cart from './pages/Cart/index'


  export default function Routes() {
      return (
          <BrowserRouter>
            <Switch>
                  <Route exact path="/produtos">
                        <Products_List/>
                  </Route>

                  <Route path="/carrinho">
                        <Cart/>
                  </Route>
              </Switch>
              
          </BrowserRouter>
      )
  }