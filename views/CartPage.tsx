"use client"
import CartQuantity from '@/Components/cart/CartQuantity'
import RemoveCartItem from '@/Components/cart/RemoveCartItem'
import { AppContext } from '@/context/cartContext/AppContext'
import { removeCartItem } from '@/utlis/Cart/add-to-cart'
import React, { useContext, useState } from 'react'

type Props = {}

const CartPage = (props: Props) => {
    const [cart, setCart, summery]:any = useContext(AppContext)
    console.log(cart);
    console.log(summery);
    
    return (
        <div>
            <div className="_container">
                <div><h3 className='text-5xl text-center py-10'>Cart</h3></div>
                <div className="">
                    <div className="grid grid-cols-5 gap-x-10">
                        <div className='col-span-3'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                      {
                                        cart?.length > 0 && cart?.map((data:any, i:number) => {
                                            return   <tr key={data?.key}>
                                            <th>{i + 1 }</th>
                                            <td>{data?.data?.name}</td>
                                            <td>{data?.line_total}</td>
                                            <td>
                                                <CartQuantity data={data} setCart={setCart}/>
                                            </td>
                                            <td>
                                                <RemoveCartItem data={data}  setCart={setCart} />
                                            </td>
                                        </tr>
                                        })
                                      }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className="card w-96 bg-neutral-content text-primary">
                                <div className="card-body">
                                    <h2 className="card-title">Summery</h2>
                                    <div className='grid grid-cols-2'>
                                        <span>Total</span>
                                        <span>${summery?.total}</span>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage