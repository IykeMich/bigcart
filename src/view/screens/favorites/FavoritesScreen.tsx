import React from 'react'
import { DefaultLayout } from '@/view/layout'
import FavoritesContainer from '@/components/container/favorites/FavoritesContainer'

export default function FavoritesScreen() {
  return (
    <DefaultLayout 
      title="Favorites"
      menuType="menu"
      showHeader={true}
      className='bg-[#F4F5F9]'
    >
      <FavoritesContainer />
    </DefaultLayout>
  )
}