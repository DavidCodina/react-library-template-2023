import React from 'react'
import './Message.scss'
import { IMessage } from './types' // Don't add .js or .ts here

// ESLint Promise test
// export const promise1 = new Promise((resolve, _reject) => {
//   resolve('Success!')
// })

// export const func = () => {
//   return promise1
//     .then((value) => {
//       return value
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// promise1
//   .then((value) => {
//     return value
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/* ========================================================================
                                Message
======================================================================== */

const Message = ({
  className = '',
  message = 'Whoops! No message was provided! You dope!',
  style = {}
}: IMessage) => {
  /* ======================
          return
  ====================== */

  return (
    <div style={style} className={`message${className ? ` ${className}` : ''}`}>
      {message}
    </div>
  )
}

export { Message }
