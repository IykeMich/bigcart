import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import ArrowRightIcon from "@/assets/icons/ArrowRight.svg" 
import { RouterUtil } from '@/utility/RouterUtil'
import { categories } from '@/utility/fixtures/CategoryDataset'
import ProductCard from '@/components/card/ProductCard'
import { products } from '@/utility/fixtures/ProductDataset'


export default function FeaturedProductsSection() {
    function handleNavigateToCategory() {
        console.log('Navigating to categories');
        RouterUtil.navigate("dashboard.categories");
    }
  return (
    <View>
        <View className='flex-row items-center justify-between mb-6'>
            <Text className='text-lg font-semibold'>Featured Products</Text>
            <TouchableOpacity onPress={handleNavigateToCategory}>
                <ArrowRightIcon/>
            </TouchableOpacity>
        </View>
        {/* <View className='flex-row items-center justify-between overflow-visible gap-4 gap-y-5'>
            {categories.map((category) => (
                <TouchableOpacity key={category.id} className='flex gap-2 flex-col items-center mb-6 rounded-lg justify-center'>
                    {category.icon && <category.icon width={52} height={52} />}
                    <Text className='text-[10px] font-medium text-[#868889]'>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View> */}
        <View className="flex-1 bg-gray-50 p-4">
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <ProductCard product={item} onAddToCart={(id) => console.log("Added:", id)} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    </View>
  )
}