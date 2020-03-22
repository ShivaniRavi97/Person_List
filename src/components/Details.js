import React, { Component } from 'react'
import data from './Data'
import { NavLink } from 'react-router-dom';
import { Image, Card, Icon } from 'semantic-ui-react'


let iid
const perdata=data()
let person1
const Details = (props) => {
  iid=props.match.params.id

for( let i=0 ; i< data().length ; i++)
{

  if(parseInt(perdata[i].id) === parseInt(props.match.params.id))
   {
      person1=perdata[i]

      // console.log(person1)
   } 
} 
    return(
      <div className="details">
          
          <NavLink to="/"  exact={true}>
          <Icon.Group className="arrow">
                        <Icon size="big" name='angle left'  />
                    </Icon.Group>
          </NavLink>
    
        <div className="ui centered card">
        <Card className="card" fluid>
    <div className="img">
    <Image src={person1.img} wrapped ui={false} avatar/>
    </div>
    <Card.Content>
    <Card.Header>{person1.fname}{' '}{person1.lname}</Card.Header>
      {/* <Card.Meta>
    <span className='date'>{person1.fname}{' '}{person1.lname}</span>
      </Card.Meta> */}
      <Card.Description className="p">
      {' '}{person1.age}yrs
      </Card.Description>
      <Card.Description className="no">
      {' '}{person1.phone}
      </Card.Description>
    </Card.Content>
   
  </Card>
  </div>

            {/* <div className="card">
            <img src={person1.img} className="images"></img>
            <h2>Name :{' '} {person1.name}</h2>
            <h3>Age : {' '}{person1.age}</h3> 
            </div> */}
    </div>
                  
  );
 
}
  export default Details;
