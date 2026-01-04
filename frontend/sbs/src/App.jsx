import React, { Component } from 'react'
import Signup from './components/Signup'

const App = () => {
  const myRouter = createBrowserRouter([
    {path:"login",Component:Login},
    {path:"signup",Component:Signup},
    {path:"dashboard",Component:Dashboard},
  ])
  return (
    <div>
      <RoouterProvide route={myRouter}/>
    </div>
  )
}

export default App