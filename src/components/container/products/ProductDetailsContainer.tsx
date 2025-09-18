import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { Product } from "@/utility/fixtures/ProductDataset"
import GradientButton from "@/components/button/GradientButton"
import type { SvgProps } from "react-native-svg"

//
import OrangeHalfStar from "@/assets/icons/HalfOrangeStar.svg" 
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react-native"
import Cart from "@/assets/icons/Cart.svg"

// const Cart: React.FC<SvgProps> = (props) => (
//   <ShoppingBag {...props} stroke={props.color ?? '#fff'} />
// )


type ProductDetailsRoute = { params: { product: Product } }

export default function ProductDetails() {
  const route = useRoute<RouteProp<ProductDetailsRoute, "params">>()
  const { product } = route.params

  return (
    <View className="flex-1 bg-white p-5">
      <Image
        source={product.image}
        className="w-full h-60 rounded-xl"
        resizeMode="contain"
      />

      {/* Bottom Card */}
        <View style={{
            flex: 1,
            backgroundColor: '#F4F5F9',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 50,
        }} className='absolute -bottom-4 -left-2 -right-2'>
        <View>
            <View className="flex-row justify-between items-center">
                <Text className="mt-2 text-green-600 text-xl font-semibold">${product.price}.00</Text>
                <Heart stroke={'#868889'}/>
            </View>
            <View className="flex-col justify-start items-start mt-4">
                <Text className="text-gray-800 text-[20px] font-semibold">{product.name}</Text>
                <Text className="text-[#868889] text-[12px] my-1">{product.unit}</Text>
                <View className="flex-row items-center my-2 gap-1">
                    <Text className="text-black"> {product.rating}</Text>
                    {/* calcualte the product rating to know the number of stars to give it */}
                    {product.rating && (
                    <>
                    <Text>
                        <Star stroke={'#FFC107'} fill={'#FFC107'} size={16}/> <OrangeHalfStar />
                    </Text>
                    <Text className="text-[#868889] font-medium text-[12px] ml-1">(89 reviews)</Text>
                    </>
                    )}
                </View>
            </View>

            <View>
                <Text className="text-gray-500 font-normal leading-relaxed text-sm">{product.description}
                    {product.description && product.description.length > 100 ? "..." : ""}
                    {product.description && product.description.length > 100 ? (
                            <Text className="font-normal text-black"> {" "}More</Text> 
                    ) : ""}
                </Text>
            </View>

            <View className="w-full h-[50px] flex-row bg-white rounded-lg items-center justify-between mt-4">
                <Text className="mr-auto ml-4 text-[#868889]">Quantity</Text>
                <View className="flex gap-4 ml-0 mr-4 flex-row items-center h-full">
                    <TouchableOpacity>
                        <Minus stroke={'#6CC51D'}/>
                    </TouchableOpacity>
                    <View className="border-r border-l border-l-gray-300 border-r-gray-300 h-[100%] px-4 items-center justify-center">
                        <Text>1</Text>
                    </View>
                    <TouchableOpacity>
                        <Plus stroke={'#6CC51D'}/>
                    </TouchableOpacity>

                </View>
            </View>

            <View className="mt-6">
                <GradientButton title="Add to Cart" className="w-full" rightIcon={Cart} />
            </View>

        </View>
        </View>
    </View>
  )
}
