import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Pages = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin: 0;
  
`

const PageItem = styled.li`
list-style: none;
text-decoration: none;


`

const Header = () => (
  <nav>
    <Pages>
      <PageItem>
        <Link to="/">Home</Link>
      </PageItem>
      <PageItem>
        <Link to="/about">About</Link>
      </PageItem>
    </Pages>
  </nav>
)



export default Header
