import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { DefaultTypography } from '@/components/text/DefaultTypography';
import GradientButton from '@/components/button/GradientButton';
import { DefaultTextInput } from '@/components/default/DefaultTextInput';
import HomeCarousel from '@/components/carousel/HomeCarousel';
import { carouselSlides } from '@/utility/fixtures/HomeCarouselDataset';

// icons
import { SearchIcon, FilterIcon } from '@/assets/icons'; 
import CategoriesCarousel from '@/components/carousel/CategoriesCarousel';
import FeaturedProductsSection from '@/components/section/products/FeaturedProductsSection';

export interface HomeContainerProps {
    onNavigateToProfile?: () => void;
    onRefresh?: () => void;
}

export const HomeContainer = ({
    onNavigateToProfile,
    onRefresh
}: HomeContainerProps) => {
    // State Management
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Damian Johnson',
        email: 'damian@example.com',
        totalOrders: 12,
        completedOrders: 8
    });

    // Data Fetching Simulation
    const fetchUserData = useCallback(async () => {
        setIsLoading(true);
        try {
            // TODO: Replace with actual API call
            // const data = await getUserData();
            await new Promise(resolve => setTimeout(resolve, 1000));
            // setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Effects
    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    // Event Handlers
    const handleRefresh = useCallback(() => {
        // fetchUserData();
        // onRefresh?.();
    }, [fetchUserData, onRefresh]);

    const handleNavigateToProfile = useCallback(() => {
        onNavigateToProfile?.();
    }, [onNavigateToProfile]);

    // Prepare data for FlatList
    const homeSections = [
        { id: 'search', type: 'search' },
        { id: 'carousel', type: 'carousel' },
        { id: 'categories', type: 'categories' },
        { id: 'featured', type: 'featured' }
    ];

    const renderHomeSection = ({ item }: { item: { id: string; type: string } }) => {
        switch (item.type) {
            case 'search':
                return (
                    <DefaultTextInput
                        minContainerClassname='!bg-[#F4F5F9] !rounded-md mt-4'
                        placeholder='Search keywords...' 
                        leftIcon={SearchIcon} rightIcon={FilterIcon} 
                    />
                );
            case 'carousel':
                return (
                    <View className='mt-2'>
                        <HomeCarousel slides={carouselSlides} />
                    </View>
                );
            case 'categories':
                return (
                    <View>
                        <CategoriesCarousel />
                    </View>
                );
            case 'featured':
                return (
                    <View className='mt-4'>
                        <FeaturedProductsSection />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <FlatList
            data={homeSections}
            renderItem={renderHomeSection}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    );
};

            // {/* Stats Section */}
            // <View className="flex-row gap-4 mb-6">
            //     <View className="flex-1 bg-blue-50 p-4 rounded-lg">
            //         <DefaultTypography className="text-3xl font-bold text-blue-600">
            //             {userData.totalOrders}
            //         </DefaultTypography>
            //         <DefaultTypography className="text-blue-800 text-sm">
            //             Total Orders
            //         </DefaultTypography>
            //     </View>
            //     <View className="flex-1 bg-green-50 p-4 rounded-lg">
            //         <DefaultTypography className="text-3xl font-bold text-green-600">
            //             {userData.completedOrders}
            //         </DefaultTypography>
            //         <DefaultTypography className="text-green-800 text-sm">
            //             Completed
            //         </DefaultTypography>
            //     </View>
            // </View>

            // {/* Quick Actions */}
            // <ScrollView
            //     showsVerticalScrollIndicator={false}
            //     refreshControl={
            //         <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
            //     }
            //     contentContainerStyle={{ paddingBottom: 20 }}
            // >
            //     <View className="gap-4">
            //         <GradientButton
            //             title="Start Shopping"
            //             onPress={() => console.log('Navigate to shopping')}
            //             className="w-full h-[50px]"
            //         />
                    
            //         <TouchableOpacity
            //             onPress={handleNavigateToProfile}
            //             className="w-full h-[50px] border-2 border-gray-300 rounded-lg items-center justify-center"
            //         >
            //             <DefaultTypography className="text-gray-700 text-base font-semibold">
            //                 View Profile
            //             </DefaultTypography>
            //         </TouchableOpacity>
            //     </View>

            //     {/* Recent Activity */}
            //     <View className="mt-8">
            //         <DefaultTypography className="text-lg font-semibold text-gray-900 mb-4">
            //             Recent Activity
            //         </DefaultTypography>
            //         <View className="bg-white p-4 rounded-lg shadow-sm">
            //             <DefaultTypography className="text-gray-600">
            //                 No recent activity to show
            //             </DefaultTypography>
            //         </View>
            //     </View>
            // </ScrollView>