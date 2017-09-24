/**
*
* Navigation
*
*/

import React from 'react'
import Wrapper from './Wrapper'

function Navigation ({ user }) {
  return (
    <Wrapper>
      Molecule
      {user && user.name}
    </Wrapper>
  )
}

export default Navigation
