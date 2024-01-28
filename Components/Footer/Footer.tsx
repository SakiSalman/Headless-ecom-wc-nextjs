import Link from 'next/link'
import React from 'react'

type Props = {
    footerData : any
}

const Footer = ({footerData}: Props) => {
  return (
    <div className='py-5'>
        <div className="_container">
            <div className='flex justify-center py-5'>
                <img width={120} src={footerData?.header?.siteLogoUrl} alt="" />
            </div>
            <div>
            <div>
            <ul className="flex justify-center gap-10 items-center">
                {
                    footerData?.footer?.footerMenuItems.length > 0 && footerData?.footer?.footerMenuItems.map((data:any, i:any) => {
                        return <li>
                        <Link href={data?.url} className="hover:text-lime-500">
                          {data.title}
                        </Link>
                      </li>
                    }) 
                }
              
            </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer