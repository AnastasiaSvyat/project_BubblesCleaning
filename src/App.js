import React from 'react'
import HomeApp from './components/Homebox/Home/home';
import './index.css';
import ServicesNav from './components/Services/servicesNav'
import ShopNav from './components/Shop/shopNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderBox from './components/OrderBox/orderBox';
import SupportiveСleaning from './components/Services/SupportiveСleaning/SupportiveСleaning';
import SpringCleaning from './components/Services/SpringCleaning/SpringCleaning';
import СleaningAfterConstruction from './components/Services/СleaningAfterConstruction/СleaningAfterConstruction';







function App() {
  return (
    <div>
      
      <Router>
                    <Switch>
                        <Route path="/" exact component={HomeApp}></Route>
                        <Route path="/Services" component={ServicesNav}></Route>
                        <Route path="/Shop" component={ShopNav}></Route>
                        <Route path="/OrderBox" component={OrderBox}></Route>
                        <Route path="/Services_SupportiveСleaning" component={SupportiveСleaning}></Route>
                        <Route path="/Services_SpringСleaning" component={SpringCleaning}></Route>
                        <Route path="/Services_СleaningAfterConstruction" component={СleaningAfterConstruction}></Route>


                    </Switch>
            </Router>
          
           
    </div>
  );
}

export default App;
