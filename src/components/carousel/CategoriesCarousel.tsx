import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ArrowRightIcon from "@/assets/icons/ArrowRight.svg" 
import { RouterUtil } from '@/utility/RouterUtil'
import { categories } from '@/utility/fixtures/CategoryDataset'
import { FlashList } from '@shopify/flash-list'


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CategoriesCarousel() {
    function handleNavigateToCategory() {
        RouterUtil.navigate("dashboard.categories");
    }
  return (
    <View>
        <View className='flex-row items-center justify-between mb-6'>
            <Text className='text-lg font-semibold'>Categories</Text>
            <TouchableOpacity onPress={handleNavigateToCategory}>
                <ArrowRightIcon/>
            </TouchableOpacity>
        </View>

        <FlashList 
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
            <TouchableOpacity
            key={item.id}
            className="flex flex-col items-center mb-6 rounded-lg justify-center"
            onPress={() => RouterUtil.navigate("product.productsByCategory", { category: item.name })}
            >
            {item.icon && <item.icon width={52} height={52} />}
            <Text className="text-[10px] font-medium text-[#868889]">
                {item.name}
            </Text>
            </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH - 40}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />} // gap-4
        />

    </View>
  )
}


{/* <View className='flex-row items-center justify-between overflow-visible gap-4 gap-y-5'>
    {categories.map((category) => (
        <TouchableOpacity key={category.id} className='flex gap-2 flex-col items-center mb-6 rounded-lg justify-center'>
            {category.icon && <category.icon width={52} height={52} />}
            <Text className='text-[10px] font-medium text-[#868889]'>{category.name}</Text>
        </TouchableOpacity>
    ))}
</View> */}