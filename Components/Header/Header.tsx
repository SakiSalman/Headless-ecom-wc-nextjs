"use client"

import { AppContext } from "@/context/cartContext/AppContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";


type Props = {
    headerData : any
}
const Header = ({headerData}: Props) => {
  const [cart]:any = useContext(AppContext)
  
  return (
    <div className="shadow-sm">
      <div className="_container">
        <div className="grid grid-cols-3 py-4 gap-x-3 items-center">
          <div>
            <img width={120} src={headerData?.siteLogoUrl} alt="" />
          </div>
          <div className="">
            <ul className="flex justify-between gap-x-2 items-center">
                {
                    headerData?.headerMenuItems.length > 0 && headerData?.headerMenuItems.map((data:any, i:any) => {
                        return <li>
                        <Link href={data?.url} className="hover:text-lime-500">
                          {data.title}
                        </Link>
                      </li>
                    }) 
                }
              
            </ul>
          </div>
          <Link href="/cart">
          <div className="flex justify-end items-center">
            <span className="text-xl  flex">
          <FaBagShopping />
          <span className="text-sm">{cart.length}</span>
            </span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
