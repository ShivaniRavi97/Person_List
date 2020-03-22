import React, { Component } from 'react'
import Person_details from './Person_details'
import data from './Data'
// import Carousel from 'react-images';

// const images = [{ source: '1.jpeg', source: '2.jpeg' }];

// console.log(data())
export class Person extends Component {
    render() {
        return (
            <div>
                <h1>Person List</h1>

                <Person_details person={data()} />
            </div>
        );
    }
}

export default Person

// export default () => (
//     <AutoSizer>
//       {({ height, width }) => (
//         <List
//           className="List"
//           height={height}
//           itemCount={1000}
//           itemSize={35}
//           width={width}
//         >
//           {Row}
//         </List>
//       )}
//     </AutoSizer>
//     )


  
  
  

  
