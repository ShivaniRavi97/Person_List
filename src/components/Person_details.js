import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
// import { FixedSizeList as List } from 'react-window';
import {  FixedSizeList as List } from "react-window";
import AutoSizer from 'react-virtualized-auto-sizer';
import data from './Data'



// export class Person_details extends Component {
    // render() {

    //     return (
          
    //         <div >
                
    //             {
                
    //             this.props.person.map((item) =>
                
    //             <NavLink to={ `/person/${item.id}` } exact={true}>
    //                 <div className="pers_details">
    //                 <img src={item.img} className="images"></img>
    //                     <div className="heads">
    //             <h2>Name :{' '} {item.fname}{' '}{item.lname}</h2>
    //                 <h3>Age : {' '}{item.age}</h3>
              
                    
    //                 </div>
                   
    //                 <Icon.Group className="arrow">
    //                     <Icon size="big" name='angle right'  />
    //                 </Icon.Group>
    //                 </div>
    //                 </NavLink>
                  
             
            
    //             )
                
    //             }
               


    //         </div>
    //     )
    // }
// }
let person=data()
    const Row = () => (
        <div >
                { console.log(person)} 
               {
                
               

                person.map((item) =>
                
                <NavLink to={ `/person/${item.id}` } exact={true}>
                    <div className="pers_details">
                    <img src={item.img} className="images"></img>
                        <div className="heads">
                <h2>Name :{' '} {item.fname}{' '}{item.lname}</h2>
                    <h3>Age : {' '}{item.age}</h3>
              
                    
                    </div>
                    <Icon.Group className="arrow">
                        <Icon size="big" name='angle right'  />
                    </Icon.Group>
                    </div>
                    </NavLink>
                  
             
            
                )
                
                }
               


            </div>
    );

const Person_details = () => (
    <AutoSizer>
    {({height, width}) => (
    <List
      height={750}
      itemCount={1000}
      itemSize={35}
      width={width}
      
    >
      {Row}
    </List>
    )}
    </AutoSizer>
  );
export default Person_details