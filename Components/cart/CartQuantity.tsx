"use client"
import React, { useState } from 'react'
import { increaseQuantityCart } from '@/utlis/Cart/add-to-cart'


type Props = {
    data : any
    setCart : () => void
}

const CartQuantity = ({data, setCart}: Props) => {
    const [isLoading, setLoading] = useState(false);

    return (
        <div className="flex justify-around items-center w-24 gap-x-3 border rounded-md p-1 mt-3">
            <span onClick={() => increaseQuantityCart(data?.key, data?.quantity - 1, setCart, setLoading)}  className=" text-2xl cursor-pointer hover:text-hGreen">-</span>
            {
                isLoading ? <button className="btn btn-square">
                <span className="loading loading-spinner"></span>
              </button> : <input type="text" value={data?.quantity} className="w-full p-1 outline-none text-center" readOnly />
            }
            <span onClick={() => increaseQuantityCart(data?.key, data?.quantity + 1, setCart, setLoading)} className=" text-xl cursor-pointer hover:text-hGreen" >+</span>
        </div>
    )
}

export default CartQuantity