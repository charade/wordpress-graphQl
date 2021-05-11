import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Navigation from './Navigation'

const Header = ({isHomePage})=>{
    const data = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  const title = data.wp.generalSettings.title;
  const description = data.wp.generalSettings.description;
  console.log(data);
    return(

        <header className="global-header">
            <Navigation />
            {isHomePage ? 
            (
                <h1 className="main-heading">
                  <Link to="/">{title}</Link>
                </h1>
            ) :

            (
              <Link className="header-link-home" to="/">
                {title}
              </Link>
            )
            }
            
            <p>{ description }</p>
        </header>
    )
}

export default Header;