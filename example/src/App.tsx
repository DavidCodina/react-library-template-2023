// Third-party imports
import { Fragment } from 'react'

// Custom imports
// Rename the library import to whatever you want. Just be sure to also
// change it in the example app's package.json: "local-library": "file:.."
import { Square } from 'local-library'

/* ========================================================================
                              App
======================================================================== */
///////////////////////////////////////////////////////////////////////////
//
// Other reminders:
//
//   - Don't forget to set the library's name property in the outer package.json.
//     The name property affects the name of your NPM library when you go to: npm publish.
//
//   - Make sure to update the dist folder and the npm version BEFORE running npm publish:
//
//       npm run build
//       npm version patch -m "Updating patch version"
//
///////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <Fragment>
      <h1
        className='outline-strong outline-primary outline-width-1 outline-shadow'
        style={{
          fontSize: 50,
          fontWeight: 900,
          margin: '25px auto 50px auto',
          textAlign: 'center'
        }}
      >
        Example App
      </h1>

      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Square style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5' }} />
      </div>
    </Fragment>
  )
}

export default App
