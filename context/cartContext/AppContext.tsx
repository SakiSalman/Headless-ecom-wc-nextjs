"use client"
import React, { ReactNode, createContext, useEffect, useState } from 'react'
export const AppContext = createContext([{}, () => {}])
type Props = {
  children : ReactNode
}

const AppProvider = ({children}: Props) => {
  const [cart, setCart] = useState([])

  useEffect(() =>{
   if (process.browser) {
    let storedCart =  localStorage.getItem("next-cart")
    if (storedCart) {
      let parseCart = JSON.parse(storedCart)
      if (parseCart.length > 0) {
        setCart(parseCart)
      }
     
    }
   }
  }, [])
  useEffect(() =>{
  if (process.browser) {
    localStorage.setItem('next-cart', JSON.stringify(cart))
  }
  }, [cart])
  return (
    <AppContext.Provider value={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider