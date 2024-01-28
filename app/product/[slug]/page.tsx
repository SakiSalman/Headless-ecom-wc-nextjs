import { getWoocommerData } from '@/utlis/getCMSData'
import React from 'react'

type Props = {}

const page = async ({ params }: { params: { slug: string } }) => {

    const response = await getWoocommerData(`products/?slug=${params.slug}`)

    console.log(response.data[0].name);
    

  return (
    <div>page</div>
  )
}

export default page