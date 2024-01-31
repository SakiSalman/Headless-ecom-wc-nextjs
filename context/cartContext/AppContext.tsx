"use client"
import { getCartData } from '@/utlis/Cart/add-to-cart'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
export const AppContext = createContext<any>([])
type Props = {
  children : ReactNode
}

const AppProvider = ({children}: Props) => {
  const [cart, setCart] = useState([])
  const [summery, setSummery] = useState({
    total : 0
})
const calculateSummery = () => {
  let total = 0
  if (cart?.length > 0) {
    total = cart.reduce(
      (accumulator:any, currentValue:any) => accumulator + currentValue.line_total,
      0,
    );
  }
  setSummery({total : total})
}
  useEffect(() =>{
    getCartData(setCart)
    let storedCart =  localStorage.getItem("next-cart")
    if (storedCart) {
      let parseCart = JSON.parse(storedCart)
      if (parseCart.length > 0) {
        setCart(parseCart)
      }
     
    }
  }, [])
  useEffect(() =>{
    calculateSummery()
  if (process.browser) {
    localStorage.setItem('next-cart', JSON.stringify(cart))
  }
  }, [cart])
  return (
    <AppContext.Provider value={[cart, setCart, summery]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider