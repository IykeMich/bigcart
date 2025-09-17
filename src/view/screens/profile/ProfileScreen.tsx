import { View, Text } from 'react-native'
import React from 'react'
import { DefaultLayout } from '@/view/layout'
import ProfileContainer from '@/components/container/profile/ProfileContainer'

export default function ProfileScreen() {
  return (
    <DefaultLayout 
      title="Profile"
      menuType="menu"
      showHeader={true}
      className='bg-[#F4F5F9]'
    >
        <ProfileContainer />
    </DefaultLayout>
  )
}