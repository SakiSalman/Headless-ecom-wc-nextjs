"use client"
import ProductCard from '@/Components/Cards/ProductCard'

type Props = {
    data : any
}

const HomePageUI = ({data}: Props) => {
  return (
    <div>
      <div className="_container">
        <div><h3 className='text-5xl text-center py-10'>All Products</h3></div>
        <div className="">
          <div className="grid grid-cols-3 gap-3">
              {
                data?.length > 0 && data?.map((data:any, i:number) => {                  
                  return <ProductCard product={data} key={i}/>
                })
              }
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageUI