import { View, Text } from 'react-native'
import React from 'react'
import { DefaultLayout } from '@/view/layout'
import ProductsByCategoryContainer from '@/components/container/products/ProductsByCategoryContainer'
import { RouterUtil } from '@/utility/RouterUtil'
import { useRoute } from '@react-navigation/native'

type RouteParams = {
  category: string
}

export default function ProductsByCategoryScreen() {
    const route = useRoute<any>()
    const { category } = route.params as RouteParams

  return (
    <DefaultLayout title={category} goBack={() => RouterUtil.goBack()} menuType='back' >
      <ProductsByCategoryContainer />
    </DefaultLayout>
  )
}