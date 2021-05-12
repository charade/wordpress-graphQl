// import React from 'react';
// import {useStaticQuery, graphql} from 'gatsby';

// function SideBar(){

//     const data = useStaticQuery(graphql`
//         query {
//             allWpCategory {
//               nodes {
//                 name
//               }
//             }
//           }
//     `)
//     console.log(data)

//     const categories_names = data.allWpCategory.nodes.name;
//     return(
//         <ul className = 'side-bar'>
//             {categories_names.map((el,i) =>(

//                 <li key = {i}>{el.name}</li>

//             ))}
//         </ul>
//     )
// }
// export default SideBar;