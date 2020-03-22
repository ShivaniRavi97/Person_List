import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Person_details from '../components/Person_details';
import Person from '../components/Person';
import Details from '../components/Details';

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
     
      <Switch>
        {/* <Route 
            path="/" 
            exact={true}
            component={() => 
                <Person person={props.person}
                
                isAuthed={true}
                />}
           />
        <Route path="/person/:id" component={() => 
                <Details person={props.person}
                
                />} /> */}
                <Route path="/" component={Person} exact={true}></Route>
                <Route path="/person/:id" component={Details}></Route>
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;