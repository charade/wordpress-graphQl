import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

const Navigation = () => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        wpMenu(name: { eq: "main" }) {
          menuItems {
            nodes {
              url
              label
              id
            }
          }
        }
      }
    `)
    const menu = data.wpMenu.menuItems.nodes
    return (
      <nav>
        {menu.map((el) => (
          <Link key={el.id} to={el.url}>
            {el.label}
          </Link>
        ))}
      </nav>
    )
  }
  
  export default Navigation