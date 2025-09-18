import React from 'react'
import { DefaultLayout } from '@/view/layout'
import ProductDetailsContainer from '@/components/container/products/ProductDetailsContainer'
import { RouterUtil } from '@/utility/RouterUtil'
import { Product } from '@/utility/fixtures/ProductDataset'
import { RouteProp, useRoute } from '@react-navigation/native'

type ProductDetailsRoute = {
  params: { product: Product }
}

export default function ProductDetailsScreen() {
    const route = useRoute<RouteProp<ProductDetailsRoute, "params">>()   
    const { product } = route.params
  return (
    <DefaultLayout menuType="back" title={product.name} className='bg-white'  goBack={() => RouterUtil.goBack()}>
      <ProductDetailsContainer />
    </DefaultLayout>
  )
}