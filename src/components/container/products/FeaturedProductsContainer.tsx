import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { Product } from "@/utility/fixtures/ProductDataset"

type ProductDetailsRoute = {
  params: { product: Product }
}

export default function ProductDetail () {
  const route = useRoute<RouteProp<ProductDetailsRoute, "params">>()
  const { product } = route.params

  return (
    <View className="flex-1 bg-white p-5">
      <Image
        source={product.image}
        className="w-full h-60 rounded-xl"
        resizeMode="contain"
      />

      <Text className="mt-5 text-2xl font-bold text-gray-800">{product.name}</Text>
      <Text className="text-gray-500 text-base">{product.unit}</Text>
      <Text className="mt-2 text-green-600 text-xl font-semibold">${product.price}</Text>

      <TouchableOpacity className="mt-6 bg-green-600 py-3 rounded-xl">
        <Text className="text-center text-white font-semibold">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}