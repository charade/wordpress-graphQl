import React from 'react';
import { Link, useStaticQuery, graphql} from 'gatsby';


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
      <nav className = 'navBar'>
        <ul className = 'link-wrapper'>
            {menu.map((el) => (
                <li key={el.id} className = "link-container">
                {
                    el.url.startsWith('http') ?
                    (<a href={el.url}  className = 'link'>
                        {el.label}
                    </a>)
                    :
                  
                   ( <Link to={el.url}  className = 'link'>
                      {el.label}
                    </Link>)
                }
                 
                </li>
            
            ))}
        </ul>
      </nav>
    )
  }
  

export default Navigation