import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
  
import Products_List from './pages/Products_List/index'
import Cart from './pages/Cart/index'
import Login from './pages/Login/index'
import NewUser from './pages/NewUser/index'
import ReceitaPage from './pages/ReceitaPage/index'
import Story from './pages/Story/index'
import Contact from './pages/Contact/index'


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

                  <Route path="/cadastro">
                        <NewUser/>
                  </Route>

                  <Route path="/receita">
                        <ReceitaPage/>
                  </Route>
                  
                  <Route path="/contato">
                        <Contact/>
                  </Route>
                  
                  <Route path="/historia">
                        <Story/>
                  </Route>
              </Switch>
              
          </BrowserRouter>
      )
  }