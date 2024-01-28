import { getWoocommerData } from '@/utlis/getCMSData'
import HomePageUI from '@/views/HomePageUI'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

  const response = await getWoocommerData("products")
  
  return (
    <>
      <HomePageUI data={response.data}/>
    </>
  )
}

export default page