import React, { useEffect } from 'react';
import { DefaultLayout } from '@/view/layout/DefaultLayout';
import { HomeContainer } from '@/components/container/dashboard/HomeContainer';
import { RouterUtil } from '@/utility/RouterUtil';

const HomeScreen = () => {
    // Screen-level effects
    useEffect(() => {
        // Any screen-specific initialization can go here
        // For example: analytics tracking, screen focus effects, etc.
    }, []);

    // Event handlers for container callbacks
    const handleNavigateToProfile = () => {
        RouterUtil.navigateToRoute("profile.main");
    };


    const handleRefresh = () => {
        // Handle refresh at screen level if needed
        console.log('Screen refresh triggered');
    };

    return (
        <DefaultLayout 
            menuType="menu"
            showHeader={false}
            // className='!bg-[#E5E5E5]/80'
            // className='!bg-[#E5E5E5]/10'
            className='bg-white'
        >
            <HomeContainer
                onNavigateToProfile={handleNavigateToProfile}
                onRefresh={handleRefresh}
            />
        </DefaultLayout>
    );
};

export default HomeScreen;
