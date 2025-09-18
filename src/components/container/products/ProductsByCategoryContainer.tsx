import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { products } from '@/utility/fixtures/ProductDataset'
import ProductCard from '@/components/card/ProductCard'
import { RouterUtil } from '@/utility/RouterUtil'

type RouteParams = {
  category: string
}

export default function ProductsByCategoryContainer() {
    const route = useRoute<any>()
    const { category } = route.params as RouteParams

    const filteredProducts = products.filter((p) => p.category === category)

    const handleProductPress = (product: any) => {
        RouterUtil.navigate('product.details', { product })
    }

    const handleAddToCart = (id: string) => {
        console.log("Added to cart:", id)
    }

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => handleProductPress(item)}
            onAddToCart={handleAddToCart}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}