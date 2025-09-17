import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { categories } from '@/utility/fixtures/CategoryDataset'

export default function CategoriesContainer() {

  return (
    <View className='px-4' >
      <View className='flex flex-row justify-between flex-wrap overflow-auto gap-3 gap-y-5'> 
        {categories.map((category) => (
          <TouchableOpacity key={category.id} className='flex gap-2 flex-col items-center size-[120px] rounded-lg bg-[#FFFBFB] justify-center'>
            {category.icon && <category.icon width={66} height={66} />}
            <Text className='text-[10px] font-medium text-[#868889]'>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}