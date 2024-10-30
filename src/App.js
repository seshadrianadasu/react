import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Javascript from './Javascript'
import Angular from './Angular'
import Vue from './Vue'
import Details from './Details'
import Name from './Name'
import Signup from './Signup'
import Signin from './Signin'
import Carousal from './Carousal'
import Pagenotfound from './Pagenotfound'
import Add from './Add'
import Practice from './Practice'
import Card from './Card'


import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Menu/>}>
        <Route path='/Javascript' exact element={<Javascript/>}></Route>
        <Route path='/Angular' exact element={<Angular/>}></Route>
        <Route path='/Vue' exact element={<Vue/>}></Route>
        <Route path='details' exact element={<Details/>}>
          <Route path='name' exact element={<Name/>}></Route>
          <Route path='signup' exact element={<Signup/>}></Route>
          <Route path='signin' exact element={<Signin />}></Route>
        </Route>
        <Route path='/add' exact element={<Add/>}></Route>
        </Route>
        <Route path='*' exact element={<Pagenotfound/>}></Route>
      </Routes> 
      <Carousal/>  
      <Name/>
      <Practice/> 
      <Card>
          <h1>
            this is card component
          </h1>
        </Card>
    </BrowserRouter>
  )
}

export default App