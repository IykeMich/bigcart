import React from 'react';
import { View, Text } from 'react-native';
import { DefaultLayout } from '@/view/layout/DefaultLayout';
import { RouterUtil } from '@/utility/RouterUtil';
import CategoriesContainer from '@/components/container/categories/CategoriesContainer';

const CategoriesScreen = () => {
    function handleGoBack() {
        RouterUtil.goBack()
    }
    return (
        <DefaultLayout 
            menuType="back"
            goBack={handleGoBack}
            showHeader={true}
            className='bg-[#F4F5F9]'
            title='Categories'
        >
            <CategoriesContainer />
        </DefaultLayout>
    );
};

export default CategoriesScreen;