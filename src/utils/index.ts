/* ======================
  disableSmoothScroll()
====================== */
///////////////////////////////////////////////////////////////////////////
//
// Usage:
//
// <button
//   className='btn btn-secondary btn-sm fw-bold d-block mx-auto'
//   onClick={() => {
//     disableSmoothScroll()
//     router.push('/events')
//   }}
// >
//   Go To Events Page
// </button>
//
///////////////////////////////////////////////////////////////////////////

export const disableSmoothScroll = (duration = 1000) => {
  const html = document.querySelector('html')!
  html.style.scrollBehavior = 'auto'
  // No need to force reflow.
  // console.log(document.body.offsetHeight)
  setTimeout(() => {
    html.style.scrollBehavior = ''
  }, duration)
}

/* ======================
      isOneOf()
====================== */
// Used as a conditional check in if statements to determine
// if the value is one of an array of allowedValues.

export const isOneOf = (value: any, allowedValues: any[]) => {
  if (allowedValues.indexOf(value) !== -1) {
    return true
  }
  return false
}

/* ======================
     getErrorMessage
====================== */
// Used in the catch(err) block of a try/catch.
// The Basir Udemy tutorial video 16 at 8:45 has a similar function...
// https://gale.udemy.com/course/nextjs-ecommerce/learn/lecture/32434498#overview

export const getErrorMessage = (
  err: any,
  fallBackMessage = 'The request failed!'
) => {
  return err?.response?.data?.message
    ? err?.response?.data?.message
    : err.message
    ? err.message
    : fallBackMessage
}

/* ======================
        sleep()
====================== */
// Used to in API calls to test/simulate a slow call
// Example: await sleep(4000)
export const sleep = async (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay)) // eslint-disable-line
}

/* ======================
   imageFileToDataURL()
====================== */

export const imageFileToDataURL = (
  file: any,
  callback: (dataURL: string) => void
) => {
  const reader = new FileReader() as FileReader

  reader.onloadend = () => {
    const dataURL = reader.result as string
    callback?.(dataURL)
  }
  reader.readAsDataURL(file as any)
}

/* ======================
imageFileToBase64String()
====================== */

export const imageFileToBase64String = (
  file: any,
  callback: (base64String: string) => void
) => {
  const reader = new FileReader() as FileReader

  reader.onloadend = () => {
    // The reader result is a dataURL, while the base64String is the stripped version.
    const dataURL = reader.result as string
    const base64String = dataURL.replace('data:', '').replace(/^.+,/, '')
    callback?.(base64String)
  }
  reader.readAsDataURL(file as any)
}

/* ======================
    transformToSlug()
====================== */
// This function transforms a string (blog title, product name, etc)
// into a slug that can be used as a URL fragment.
//
// It will remove special characters from str, replace spaces with '-', and make lowercase.
// As far as special characters are concerned, rather than specifying what to exclude,
// it's easier to merely specify what is allowed.
// https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string#:~:text=Use%20the%20replace()%20method,t%20contain%20any%20special%20characters.

export const transformToSlug = (str: string) => {
  if (!str || typeof str !== 'string') {
    return str
  }

  const transformed = str
    .replaceAll(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-')
    .toLowerCase()

  return transformed
}

/* ======================
        getKB()
====================== */
// https://dev.to/rajnishkatharotiya/get-byte-size-of-the-string-in-javascript-20jm
// Blob is not defined. Presumably, you can't use Blob on the server.
// Thus if you want to test the size of the data returned by getServerSideProps, etc.,
// you would use it on the client side instead.
// The obj argument can technically be anything that can be stringified.

export const getKB = (obj: any) => {
  const bytes = new Blob([JSON.stringify(obj)]).size
  const kilobytes = Math.round(bytes / 1000)
  return kilobytes
}

/* ======================
    propInObj()
====================== */
// https://dmitripavlutin.com/check-if-object-has-property-javascript/
export const propInObj = (prop: string, obj: Record<any, any>) => {
  return prop in obj
}

/* ======================
      docToObj()
====================== */
// This function is used to get around the Next.js serialization error that
// sometimes occurs when getting data from the database withing getServerSideProps.
// Pass a document directly to it, or if you're working with an array of documents,
// you can map over that array as follows: products.map(docToObj),
// As an alternate solution, I've also seen people do: JSON.parse(JSON.stringify(products))

export const docToObj = (doc: any) => {
  doc._id = doc._id.toString()

  if (doc.createdAt) {
    doc.createdAt = doc.createdAt.toString()
  }

  if (doc.updatedAt) {
    doc.updatedAt = doc.updatedAt.toString()
  }

  return doc
}

/* ======================
        formatDate()
  ====================== */

export const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// From react-toastify
// export const isNum = (v: any): v is Number =>typeof v === 'number' && !isNaN(v);
// export const isStr = (v: any): v is String => typeof v === 'string';
// export const isFn = (v: any): v is Function => typeof v === 'function';
