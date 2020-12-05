import React from 'react'
import HomeApp from './components/Homebox/Home/home';
import './index.css';
import ServicesNav from './components/Services/servicesNav'
import ShopNav from './components/Shop/shopNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderBox from './components/OrderBox/orderBox';


function App() {
  return (
    <div>
      <Router>
                    <Switch>
                        <Route path="/" exact component={HomeApp}></Route>
                        <Route path="/Services" component={ServicesNav}></Route>
                        <Route path="/Shop" component={ShopNav}></Route>
                        <Route path="/OrderBox" component={OrderBox}></Route>

                    </Switch>
            </Router>
           
    </div>
  );
}

export default App;
