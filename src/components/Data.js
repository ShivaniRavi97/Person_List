import React, { Component } from 'react'
import uuid from 'uuid'


let PERSON =[
    {id:101,fname:'John',lname:'Lewis', age:'30',phone:'9089788678',img:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {id:102,fname:'Nancy', lname:'Aniston',age:'24',phone:'9089798678',img:'https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_960_720.jpg'},
    {id:103,fname:'Vamshi',lname:'Rao', age:'29',phone:'9089788678',img:'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80'},
    {id:104,fname:'Jeniffer',lname:'Drew', age:'27',phone:'9999788678',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {id:105,fname:'Nishant',lname:'M', age:'35',phone:'9089788008',img:'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
];

// for( let i=1;i<=2;i++)
// {
//     PERSON=PERSON.concat(PERSON)
//     console.log(PERSON)
// }

 const data=()=>{
     
    return PERSON;
}

export default data