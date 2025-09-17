// components/ProductCard.tsx
import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Heart } from "lucide-react-native" 
import { Plus } from "lucide-react-native"
import { Product } from "@/utility/fixtures/ProductDataset"

type Props = {
  product: Product
  onAddToCart?: (id: string) => void
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <View className="bg-white rounded-2xl p-3 shadow-md w-[160px] mr-4">
      {/* Product image */}
      <View className="relative items-center">
        <Image
          source={{ uri: product.image }}
          className="w-24 h-24 rounded-xl"
          resizeMode="contain"
        />

        {/* NEW / Discount tag */}
        {product.isNew && (
          <Text className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full">
            NEW
          </Text>
        )}
        {product.discount && (
          <Text className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {product.discount}%
          </Text>
        )}

        {/* Heart icon */}
        <TouchableOpacity className="absolute top-2 right-2">
          <Heart size={18} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <Text className="mt-3 font-semibold text-gray-800">{product.name}</Text>
      <Text className="text-gray-500 text-sm">{product.unit}</Text>

      {/* Price + Add button */}
      <View className="mt-2 flex-row justify-between items-center">
        <Text className="text-green-600 font-bold">${product.price}</Text>

        <TouchableOpacity
          onPress={() => onAddToCart?.(product.id)}
          className="bg-green-500 rounded-full p-1.5"
        >
          <Plus size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductCard
