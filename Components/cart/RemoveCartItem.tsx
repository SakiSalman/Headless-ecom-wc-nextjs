"use client"
import { removeCartItem } from '@/utlis/Cart/add-to-cart'
import React, { useState } from 'react'

type Props = {
    data : any
    setCart : any
}

const RemoveCartItem = ({data, setCart}: Props) => {
    const [isDelating, setDelating] = useState(false)
  return (
    <button onClick={() => removeCartItem(data.key, setCart, setDelating)} className="btn btn-circle btn-outline btn-sm">
    {isDelating ? <span className="loading loading-spinner"></span> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>}
    </button>
  )
}

export default RemoveCartItem