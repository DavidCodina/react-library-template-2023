import React from 'react'
import { SCSquare } from './styles' // Don't add .js or .ts here
import { ISquare } from './types' // Don't add .js or .ts here

/* ========================================================================
                              Square
======================================================================== */

const Square = ({ className = '', style = {} }: ISquare) => {
  /* ======================
          return
  ====================== */

  return (
    <SCSquare
      style={{
        ...style
      }}
      className={className}
    />
  )
}

export { Square }
