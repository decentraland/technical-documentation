import * as React from 'react'
import GeneralLayout from '../components/GeneralLayout'
import { navigate } from "gatsby"

const NotFound = () => {

  React.useEffect(() => {
    setTimeout(() => navigate('/'), 5000)
  }, [])

   return (
    <GeneralLayout>
       <div>
         <h1>Not found</h1>
         <p>The site you requested was not found.</p>
         <p>You will be redirected to the general index in 5 seconds. <a href='/'>Or click here</a></p>
      </div>
    </GeneralLayout>
  )
}

export default NotFound
